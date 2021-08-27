import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  fillType?: 'outline' | 'solid'
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, fillType = 'outline', ...props }: ButtonProps) => (
  <S.Wrapper fillType={fillType} {...props}>
    {children}
  </S.Wrapper>
)

export default Button
