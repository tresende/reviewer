import * as S from './styles'

const ErrorMessage = () => (
  <S.Wrapper>
    <S.ErrorMessage>
      Ocorreu um erro!
      <br />
      Tente novamente mais tarde
    </S.ErrorMessage>
    <S.Image src="/img/error.png"></S.Image>
  </S.Wrapper>
)

export default ErrorMessage
