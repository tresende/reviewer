import ReviewHeader from 'components/ReviewHeader'
import ReviewComments from 'components/ReviewComments'

import * as S from './styles'

const Home = () => (
  <S.Wrapper>
    <S.Menu />
    <S.Container>
      <S.Main>
        <ReviewHeader />
      </S.Main>
    </S.Container>
    <S.Content>
      <S.Container>
        <ReviewComments />
      </S.Container>
    </S.Content>
  </S.Wrapper>
)

export default Home
