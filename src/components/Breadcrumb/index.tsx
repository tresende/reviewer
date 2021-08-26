import * as S from './styles'

const Breadcrumb = () => (
  <S.Wrapper>
    <S.Item>
      <S.Link href="/coworking">BeerOrCoffee</S.Link>
    </S.Item>
    <S.Item>
      <S.Link href="/coworking/spaces">Coworkings Brasil</S.Link>
    </S.Item>
    <S.Item>
      <S.Link href="/coworking/spaces/brasiS.Itema-df">BrasíS.Itema/DF</S.Link>
    </S.Item>
    <S.Item>Asa Sul</S.Item>
    <S.Item>
      <S.Link href="/coworking/space/bsb--brasiS.Itema">BSB Coworking</S.Link>
    </S.Item>
    <S.Item current>Avaliações</S.Item>
  </S.Wrapper>
)

export default Breadcrumb
