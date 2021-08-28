import Body from './body'
import { save } from 'services/review'
import UserReview from 'models/UserReview'
import { useLoading } from 'hooks/use-loading'

import * as S from './styles'

const ReviewModal = () => {
  const loading = useLoading()

  const handleSubmit = async (data: UserReview) => {
    try {
      const text = 'Aguarde seu comentário está sendo enviado 🚀🚀🚀'
      loading.start(text)
      await save(data)
    } catch (error) {
      console.warn(error)
    } finally {
      loading.stop()
    }
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderBackground />
        <S.Avatar src="https://d3p07km83uit4h.cloudfront.net/portal/img/profile/avatar-blank.png?v=1051" />
      </S.Header>
      <Body handleSubmit={handleSubmit} />
    </S.Wrapper>
  )
}

export default ReviewModal
