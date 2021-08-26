import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    padding: 0.6rem 1.2rem;
    width: 100%;
    border-radius: ${theme.border.radius};
    background: ${theme.colors.white};
    border: ${theme.border.default} ${theme.colors.primary};
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    cursor: pointer;
    &:hover {
      background-color: ${lighten(0.3, theme.colors.primary)};
      color: ${darken(0.2, theme.colors.primary)};
    }
  `}
`
