import ModalBody from './modalBody'
import UserReview from 'models/UserReview'
import { useLoading } from 'hooks/use-loading'
import { shareOnTwitter } from 'services/SocialMedia'

import * as S from './styles'

export type ReviewModalProps = {
  onSave?: () => void
}

const ReviewModal = ({ onSave }: ReviewModalProps) => {
  const loading = useLoading()

  const handleSubmit = async (data: UserReview) => {
    try {
      const text = 'Aguarde seu comentário está sendo enviado 🚀🚀🚀'
      loading.start(text)
      data.twitter && shareOnTwitter()
      onSave && onSave()
    } catch (error) {
      console?.warn(error)
    } finally {
      loading.stop()
    }
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderBackground />
        <S.Avatar src="/img/avatar-blank.png" alt="avatar" />
      </S.Header>
      <ModalBody handleSubmit={handleSubmit} />
    </S.Wrapper>
  )
}

export default ReviewModal
