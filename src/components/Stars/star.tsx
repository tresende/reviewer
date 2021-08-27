import { FaRegStar, FaStar } from 'react-icons/fa'
import theme from 'styles/theme'

export type StarProps = {
  outline?: boolean
  size: number
}

const Star = ({ outline, size }: StarProps) => {
  const props = { color: theme.colors.yellow, size }
  return outline ? <FaRegStar {...props} /> : <FaStar {...props} />
}

export default Star
