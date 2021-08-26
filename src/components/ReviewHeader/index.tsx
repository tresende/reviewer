import * as S from './styles'

const ReviewHeader = () => (
  <S.Wrapper>
    <S.Title>
      Avaliações de
      <a href="/coworking/space/bsb--brasilia">BSB Coworking</a>
      <span>Brasília/DF</span>
    </S.Title>
    <S.Divider />
    <div className="row">
      <div className="col-xs-12 col-sm-8">
        <div className="stars">
          <span className="icons-star">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
          </span>
          <span className="num-review">5 avaliações</span>
        </div>
      </div>
      <div className="col-xs-12 col-sm-4">
        <input
          id="writeReviewBtn"
          className="btn btn-block btn-outline btn-review pull-right"
          value="Avaliar"
          type="button"
        />
      </div>
    </div>
  </S.Wrapper>
)

export default ReviewHeader
