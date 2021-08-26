import CompanyReview from 'models/CompanyReview'
import ReviewHeader from 'components/ReviewHeader'
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
        <ReviewComments comments={data.comments} />
      </S.Container>
    </S.Content>
  </S.Wrapper>
)

export default Home
