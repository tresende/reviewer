import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 400px;
    margin-top: 1rem;
    border-radius: ${theme.border.radius};
    border: ${theme.border.default} ${theme.colors.gray300};
    background-color: ${theme.colors.white};
  `}
`
