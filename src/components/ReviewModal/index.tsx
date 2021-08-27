import * as S from './styles'

export type ReviewModalProps = {
  open?: boolean
  onClose: () => void
}

const ReviewModal = ({ onClose, open = false }: ReviewModalProps) => (
  <S.Wrapper onClick={onClose} open={open}>
    <S.Modal>Modal {open}</S.Modal>
    {open && <S.GlobalStyle />}
  </S.Wrapper>
)

export default ReviewModal
