import Star from './star'
import Button from 'components/Button'

import * as S from './styles'

export type ReviewHeaderProps = {
  company: string
  location: string
}

const ReviewHeader = ({ company, location }: ReviewHeaderProps) => (
  <>
    <S.Title>
      Avaliações de
      <a href="/coworking/space/bsb--brasilia">{company}</a>
      <S.Location>{location}</S.Location>
    </S.Title>
    <S.Divider />
    <S.Row>
      <S.IconWrapper>
        <S.Stars>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star outline />
        </S.Stars>
        <S.NumReview>5 avaliações</S.NumReview>
      </S.IconWrapper>
      <S.ButtonWrapper>
        <Button>Avaliar</Button>
      </S.ButtonWrapper>
    </S.Row>
  </>
)

export default ReviewHeader
