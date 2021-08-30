import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${media.lessThan('medium')`
    padding-right: 15px;
    padding-left: 15px;
  `}

  //original site breakpoint
  @media (min-width: 1200px) {
    width: 1170px;
  }

  //original site breakpoint
  @media (min-width: 992px) {
    width: 970px;
  }

  margin: 0 auto;
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.small} 0;
  `}
`

export const Content = styled.section`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.gray200};
  `}
`
