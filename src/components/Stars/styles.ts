import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin-right: ${theme.spacings.small};
  `}
`
