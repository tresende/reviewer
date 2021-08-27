import * as S from './styles'

const Breadcrumb = () => (
  <S.Wrapper>
    <S.Item>
      <a href="#">BeerOrCoffee</a>
    </S.Item>
    <S.Item>
      <a href="#">Coworkings Brasil</a>
    </S.Item>
    <S.Item>
      <a href="#">BrasíS.Itema/DF</a>
    </S.Item>
    <S.Item>Asa Sul</S.Item>
    <S.Item>
      <a href="#">BSB Coworking</a>
    </S.Item>
    <S.Item current>Avaliações</S.Item>
  </S.Wrapper>
)

export default Breadcrumb
