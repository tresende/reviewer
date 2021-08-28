import Stars from 'components/Stars'
import Comment from 'models/Comment'
import { toPTBRFormat } from 'utils/date'

import * as S from './styles'

export type ButtonProps = {
  comment: Comment
}

const CommentComponent = ({ comment }: ButtonProps) => (
  <S.Wrapper>
    <S.Avatar src={comment.photo} />
    <S.Comment>
      <S.CommentHeader>
        <div>
          <S.Name>{comment.user}</S.Name>
          <S.SmallText>Avaliação verificada • </S.SmallText>
          <S.SmallText>{toPTBRFormat(comment.date)}</S.SmallText>
        </div>
        <Stars size={14} quantity={comment.score} />
      </S.CommentHeader>
      <S.Text>{comment.text}</S.Text>
    </S.Comment>
  </S.Wrapper>
)

export default CommentComponent
