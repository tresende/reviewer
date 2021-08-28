import { useState } from 'react'

import Star from './star'
import { SCORE_LABEL, MAX_RATING } from 'utils/constants'

import * as S from './styles'

export type StarsProps = {
  quantity?: number
  size?: number
  onClick?: (index: number) => void
}

const Stars = ({ quantity = 1, size = 28, onClick }: StarsProps) => {
  const [selected, setSelected] = useState(quantity)

  const handleClick = (index: number) => {
    if (!onClick) return
    setSelected(index)
    onClick(index)
  }

  const solid = [...Array(selected)]
  const outline = [...Array(MAX_RATING - selected)]

  return (
    <S.Wrapper title={SCORE_LABEL[selected - 1]}>
      {solid.map((_, index) => (
        <Star key={index} onClick={() => handleClick(index + 1)} size={size} />
      ))}
      {outline.map((_, index) => {
        const currentIndex = index + 1 + selected
        return <Star key={currentIndex} onClick={() => handleClick(currentIndex)} outline size={size} />
      })}
    </S.Wrapper>
  )
}

export default Stars
