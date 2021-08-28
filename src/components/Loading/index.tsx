import { useLoading } from 'hooks/use-loading'
import * as S from './styles'

const Loading = () => {
  const { loading, text } = useLoading()
  if (!loading) return null
  return (
    <S.Wrapper>
      {text}
      <S.Logo src="/img/borc-logo-transparente.png" />
    </S.Wrapper>
  )
}

export default Loading
