import Star from './star'

import * as S from './styles'

export type StarsProps = {
  quantity?: number
  size?: number
}

const MAX_RATING = 5

const Stars = ({ quantity = 0, size = 28 }: StarsProps) => {
  const solid = [...Array(quantity)]
  const outline = [...Array(MAX_RATING - quantity)]

  return (
    <S.Wrapper>
      {solid.map((_, i) => (
        <Star key={i} size={size} />
      ))}
      {outline.map((_, i) => (
        <Star key={i} outline size={size} />
      ))}
    </S.Wrapper>
  )
}

export default Stars
