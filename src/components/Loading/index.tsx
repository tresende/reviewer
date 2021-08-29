import { useLoading } from 'hooks/use-loading'
import * as S from './styles'

const Loading = () => {
  const { loading, text } = useLoading()
  if (!loading) return null
  return (
    <S.Wrapper role="loading">
      {text}
      <S.Logo src="/img/borc-logo-transparente.png" alt="logo" />
    </S.Wrapper>
  )
}

export default Loading
