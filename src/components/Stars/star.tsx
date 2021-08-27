import { FaRegStar, FaStar } from 'react-icons/fa'

import theme from 'styles/theme'

import * as S from './styles'

export type StarProps = {
  onClick?: () => void
  outline?: boolean
  size: number
}

const Star = ({ onClick, outline, size }: StarProps) => {
  const props = { color: theme.colors.yellow, size }

  return <S.Button onClick={onClick}>{outline ? <FaRegStar {...props} /> : <FaStar {...props} />}</S.Button>
}

export default Star
