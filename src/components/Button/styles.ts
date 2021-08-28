import styled, { css, DefaultTheme } from 'styled-components'
import { darken, lighten } from 'polished'
import { ButtonProps } from '.'

const WrapperModifiers = {
  outline: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
  `,
  solid: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, fillType, disabled }) => css`
    padding: 0.6rem 1.2rem;
    width: 100%;
    border-radius: ${theme.border.smallRadius};
    border: ${theme.border.default} ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    font-weight: ${theme.font.bold};
    cursor: pointer;
    ${fillType && WrapperModifiers[fillType](theme)};
    ${disabled && WrapperModifiers.disabled()};
    ${!disabled &&
    css`
      &:hover {
        background-color: ${lighten(0.3, theme.colors.primary)};
        color: ${darken(0.2, theme.colors.primary)};
      }
    `}
  `}
`
