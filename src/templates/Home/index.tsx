import { useState } from 'react'

import Header from 'components/Header'
import ReviewModal from 'components/ReviewModal'
import CompanyReview from 'models/CompanyReview'
import ReviewHeader from 'components/ReviewHeader'
import ReviewComments from 'components/ReviewComments'

import * as S from './styles'

type HomeProps = {
  data: CompanyReview
}

const Home = ({ data }: HomeProps) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <Header />
      <S.Container>
        <S.Header>
          <ReviewHeader {...data} onReview={() => setOpenModal(true)} />
        </S.Header>
      </S.Container>
      <S.Content>
        <S.Container>
          <ReviewComments comments={data.comments} />
        </S.Container>
      </S.Content>
      <ReviewModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  )
}

export default Home
