import * as S from './styles'

export type ReviewModalProps = {
  open: boolean
  onClose: () => void
}

const ReviewModal = ({ onClose, open }: ReviewModalProps) => (
  <S.Wrapper onClick={onClose} open={open}>
    {open && (
      <>
        <S.Modal>Modal {open}</S.Modal>
        <S.GlobalStyle />
      </>
    )}
  </S.Wrapper>
)

export default ReviewModal
