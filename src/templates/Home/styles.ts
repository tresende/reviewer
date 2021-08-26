import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  ${media.lessThan('medium')`
    padding-right: 15px;
    padding-left: 15px;
  `}

  @media (min-width: 1200px) {
    width: 1170px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  margin: 0 auto;
`

export const Main = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.small} 0;
  `}
`

export const Menu = styled.section`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.black};
  `}
`

export const Content = styled.section`
  ${({ theme }) => css`
    width: 100%;
    flex: 1;
    background-color: ${theme.colors.gray200};
  `}
`
