import Stars from 'components/Stars'
import Comment from 'models/Comment'

import * as S from './styles'

export type ButtonProps = {
  comment: Comment
}

const CommentComponent = ({ comment }: ButtonProps) => {
  const formatedDate = new Intl.DateTimeFormat('pt-br').format(comment.date)
  return (
    <S.Wrapper>
      <S.Avatar src={comment.photo} />
      <S.Comment>
        <S.CommentHeader>
          <S.CommentInfo>
            <S.Name>{comment.user}</S.Name>
            <S.SmallText>Avaliação verificada • </S.SmallText>
            <S.SmallText>{formatedDate}</S.SmallText>
          </S.CommentInfo>
          <S.Score>
            <Stars size={14} quantity={comment.score} />
          </S.Score>
        </S.CommentHeader>
        <S.Text>{comment.text}</S.Text>
      </S.Comment>
    </S.Wrapper>
  )
}

export default CommentComponent
