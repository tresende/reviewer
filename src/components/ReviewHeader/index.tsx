import Stars from 'components/Stars'
import Button from 'components/Button'

import * as S from './styles'

export type ReviewHeaderProps = {
  company: string
  location: string
  onReview: () => void
}

const ReviewHeader = ({ company, location, onReview }: ReviewHeaderProps) => (
  <>
    <S.Title>
      Avaliações de
      <a href="#"> {company} </a>
      <S.Location>{location}</S.Location>
    </S.Title>
    <S.Divider />
    <S.Row>
      <S.IconWrapper>
        <Stars quantity={4} />
        <S.NumReview>5 avaliações</S.NumReview>
      </S.IconWrapper>
      <S.ButtonWrapper>
        <Button onClick={onReview}>Avaliar</Button>
      </S.ButtonWrapper>
    </S.Row>
  </>
)

export default ReviewHeader
