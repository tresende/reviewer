import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  @media (min-width: 1200px) {
    width: 1170px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  margin: 0 auto;
`

export const Content = styled.div`
  ${media.lessThan('medium')`
    padding-right: 15px;
    padding-left: 15px;
  `}
`
