import styled, { css } from 'styled-components'
import media from 'styled-media-query'

const breakpoint = 'large'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.black};
    flex-direction: column;
    background-image: url('/img/logo.png');
    background-repeat: no-repeat;
    background-position: 8rem 0;
    padding: 0 ${theme.spacings.xsmall};
    ${media.lessThan(breakpoint)`
      background-position: 1rem 0;
      input:checked ~ #items {
        display: block;
      }
    `};
  `}
`

export const Items = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    z-index: ${theme.layers.menu};
    padding: 0 ${theme.spacings.huge};
    ${media.lessThan(breakpoint)`
      display: none;
      padding: 0;
      text-align: left;
    `}
  `}
`

export const MenuItem = styled.div`
  ${({ theme }) => css`
    flex: 1;
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-family: 'Montserrat';
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    background-color: ${theme.colors.black};
    z-index: ${theme.layers.menu};
    padding: ${theme.spacings.xxsmall} 0;
    color: ${theme.colors.white};
    cursor: pointer;
    ${media.lessThan(breakpoint)`
      border-bottom:${theme.border.default} ${theme.colors.gray500};
      flex-direction: column;
    `}
  `}
`

export const Toggle = styled.input`
  display: none;
`

export const Icon = styled.label`
  ${({ theme }) => css`
    align-self: flex-end;
    display: none;
    background-color: ${theme.colors.primary};
    margin: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
  `}

  ${media.lessThan(breakpoint)`
    display: block;
    color: white;
    font-style: normal;
  `}
`

type HeaderButtonProps = {
  color?: 'primary' | 'white'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  ${({ theme, color = 'primary' }) => css`
    border: 2px solid ${theme.colors[color]};
    color: ${theme.colors[color]};
    background-color: transparent;
    padding: ${theme.spacings.xsmall};
    border-radius: 30px;
    font-weight: ${theme.font.bold};

    ${media.lessThan(breakpoint)`
      width:100%;
      padding:  ${theme.spacings.xxsmall};
    `}
  `}
`
export const Subitem = styled.span`
  margin: 1rem 0;
`
