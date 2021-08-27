import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xsmall} 0;
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    margin-top: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    border: ${theme.border.default};
    border-color: ${theme.colors.gray300};
    background-color: ${theme.colors.white};
  `}
`
