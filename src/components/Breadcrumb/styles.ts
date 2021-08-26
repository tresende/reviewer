import styled, { css, DefaultTheme } from 'styled-components'

type ItemProps = {
  current?: boolean
}

export const Wrapper = styled.ol`
  display: flex;
  list-style: none;
`

const ItemModifiers = {
  current: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold};
    &::after {
      content: '';
    }
  `
}

export const Item = styled.li<ItemProps>`
  ${({ theme, current }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    &::after {
      color: ${theme.colors.gray400};
      margin: 0 0.7rem;
      content: '> ';
    }
    ${current && ItemModifiers.current(theme)};
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-decoration: none;
  `}
`
