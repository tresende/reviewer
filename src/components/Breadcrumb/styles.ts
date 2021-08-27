import styled, { css } from 'styled-components'

export const Wrapper = styled.ol`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

export const Item = styled.li<{ current?: boolean }>`
  ${({ theme, current }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.bold};
    ${!current &&
    css`
      font-weight: ${theme.font.normal};
      &::after {
        color: ${theme.colors.gray400};
        margin: 0 ${theme.spacings.xxsmall};
        content: '>';
      }
    `};
  `}
`
