import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    padding: 0.6rem 1.2rem;
    width: 100%;
    border-radius: ${theme.border.radius};
    background: ${theme.colors.white};
    border: ${theme.border.default} ${theme.colors.primary};
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
  `}
`
