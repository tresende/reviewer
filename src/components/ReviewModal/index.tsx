import { useState } from 'react'

import ModalBody from './modalBody'
import { timeout } from 'utils/timer'
import { save } from 'services/Review'
import UserReview from 'models/UserReview'
import { useLoading } from 'hooks/use-loading'
import ErrorMessage from 'components/ErrorMessage'
import { shareOnTwitter } from 'services/SocialMedia'

import * as S from './styles'

export type ReviewModalProps = {
  onSave?: () => void
}

const ReviewModal = ({ onSave }: ReviewModalProps) => {
  const [error, setError] = useState(false)
  const loading = useLoading()
  const text = 'Aguarde seu comentário está sendo enviado 🚀🚀🚀'

  const handleSubmit = async (data: UserReview) => {
    try {
      loading.start(text)
      await save(data)
    } catch (error) {
      setError(true)
      loading.stop()
      await timeout(2000)
    } finally {
      onSave && onSave()
      setError(false)
      loading.stop()
      data.twitter && shareOnTwitter()
    }
  }

  return (
    <S.Wrapper>
      {!error && (
        <>
          <S.Header>
            <S.HeaderBackground />
            <S.Avatar src="/img/avatar-blank.png" alt="avatar" />
          </S.Header>
          <ModalBody handleSubmit={handleSubmit} />
        </>
      )}
      {error && <ErrorMessage />}
    </S.Wrapper>
  )
}

export default ReviewModal
