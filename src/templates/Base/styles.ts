import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;

  @media (min-width: 1200px) {
    width: 1170px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  margin: 0 auto;
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};
    flex: 1 0 auto;
  `}
`
