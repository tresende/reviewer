import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ReviewHeader = () => {
  library.add(faStar)
  return (
    <S.Wrapper>
      <S.Title>
        Avaliações de
        <a href="/coworking/space/bsb--brasilia">BSB Coworking</a>
        <span>Brasília/DF</span>
      </S.Title>
      <S.Divider />
      <div className="row">
        <div className="stars">
          <span className="icons-star">
            <FontAwesomeIcon size="1x" icon="star" />
          </span>
          <span className="num-review">5 avaliações</span>
        </div>
        <input
          id="writeReviewBtn"
          className="btn btn-block btn-outline btn-review pull-right"
          value="Avaliar"
          type="button"
        />
      </div>
    </S.Wrapper>
  )
}

export default ReviewHeader
