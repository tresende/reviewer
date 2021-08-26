import { FaRegStar, FaStar } from 'react-icons/fa'
import theme from 'styles/theme'

export type StarProps = {
  outline?: boolean
}

const Star = ({ outline }: StarProps) => {
  const props = { color: theme.colors.yellow, size: 28 }
  return outline ? <FaRegStar {...props} /> : <FaStar {...props} />
}

export default Star
