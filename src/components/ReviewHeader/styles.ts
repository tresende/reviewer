import styled, { css } from 'styled-components'

export const Wrapper = styled.section``

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    font-size: ${theme.font.sizes.xxlarge};
    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      &::before,
      &::after {
        content: ' ';
      }
    }
    span {
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.normal};
    }
  `}
`

export const Divider = styled.hr`
  ${({ theme }) => css`
    border: 0;
    margin: ${theme.spacings.xxsmall} 0;
    border-top: ${theme.border.default} ${theme.colors.gray100};
  `}
`
