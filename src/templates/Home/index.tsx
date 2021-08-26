import ReviewHeader from 'components/ReviewHeader'
import { CompanyReview } from 'models/CompanyReview'
import ReviewComments from 'components/ReviewComments'

import * as S from './styles'

type HomeProps = {
  data: CompanyReview
}

const Home = ({ data }: HomeProps) => (
  <S.Wrapper>
    <S.Menu />
    <S.Container>
      <S.Main>
        <ReviewHeader {...data} />
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
