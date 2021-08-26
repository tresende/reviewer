import Breadcrumb from 'components/Breadcrumb'
import CommentComponent from 'components/Comment'
import Comment from 'models/Comment'

import * as S from './styles'

export type ReviewCommentsProps = {
  comments: Comment[]
}

const ReviewComments = ({ comments }: ReviewCommentsProps) => (
  <S.Wrapper>
    <Breadcrumb />
    <S.Container>
      {comments.map((comment) => (
        <CommentComponent key={comment.id} comment={comment} />
      ))}
    </S.Container>
  </S.Wrapper>
)

export default ReviewComments
