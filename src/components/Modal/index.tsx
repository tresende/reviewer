import { useEffect } from 'react'

import * as S from './styles'

export type ModalProps = {
  open?: boolean
  children?: React.ReactNode
  onClose: () => void
}

const Modal = ({ onClose, children, open }: ModalProps) => {
  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && onClose()
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])
  if (open === undefined) return null

  const modalClasses = `animate__animated ${!open ? 'animate__bounceOutUp' : 'animate__bounceInUp'} `
  const backgroundClasses = `animate__animated ${!open ? 'animate__fadeOut' : 'animate__fadeIn'} `

  return (
    <S.Wrapper open={open} onClick={onClose} className={backgroundClasses} role="modal">
      <S.Modal onClick={(e) => e.stopPropagation()} className={modalClasses}>
        {children}
      </S.Modal>
      {open && <S.GlobalStyle />}
    </S.Wrapper>
  )
}

export default Modal
