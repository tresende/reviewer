import Header from 'components/Header'
import ReviewModal from 'components/ReviewModal'
import CompanyReview from 'models/CompanyReview'
import ReviewHeader from 'components/ReviewHeader'
import ReviewComments from 'components/ReviewComments'

import * as S from './styles'
import { useState } from 'react'

type HomeProps = {
  data: CompanyReview
}

const Home = ({ data }: HomeProps) => {
  const [openModal, setOpenModal] = useState(false)

  const onReview = () => setOpenModal(true)
  const onCloseModal = () => setOpenModal(false)

  return (
    <S.Wrapper>
      <S.Menu>
        <Header />
      </S.Menu>
      <S.Container>
        <S.Main>
          <ReviewHeader {...data} onReview={onReview} />
        </S.Main>
      </S.Container>
      <S.Content>
        <S.Container>
          <ReviewComments comments={data.comments} />
        </S.Container>
      </S.Content>
      <ReviewModal open={openModal} onClose={onCloseModal} />
    </S.Wrapper>
  )
}

export default Home
