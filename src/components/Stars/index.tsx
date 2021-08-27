import Star from './star'
import { SCORE_LABEL, MAX_RATING } from 'utilts/constants'

import * as S from './styles'

export type StarsProps = {
  quantity?: number
  size?: number
}

const Stars = ({ quantity = 1, size = 28 }: StarsProps) => {
  const solid = [...Array(quantity)]
  const outline = [...Array(MAX_RATING - quantity)]

  return (
    <S.Wrapper title={SCORE_LABEL[quantity - 1]}>
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
