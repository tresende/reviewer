import * as S from './styles'

export type ReviewModalProps = {
  open?: boolean
  onClose: () => void
}

const ReviewModal = ({ onClose, open }: ReviewModalProps) => {
  if (open === undefined) return null

  const modalClasses = `animate__animated ${!open ? 'animate__bounceOutUp' : 'animate__bounceInUp'} `
  const backgroundClasses = `animate__animated ${!open ? 'animate__fadeOut' : 'animate__fadeIn'} `

  return (
    <S.Wrapper open={open} onClick={onClose} className={backgroundClasses}>
      <S.Modal className={modalClasses}>Modal {open}</S.Modal>
      {open && <S.GlobalStyle />}
    </S.Wrapper>
  )
}

export default ReviewModal
