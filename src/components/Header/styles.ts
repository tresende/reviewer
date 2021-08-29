import styled, { css } from 'styled-components'
import media from 'styled-media-query'

const breakpoint = 'medium'

export const Nav = styled.nav`
  max-width: 1100px;
  margin: 0 auto;
`

export const Icon = styled.label`
  ${({ theme }) => css`
    display: none;
    background-color: ${theme.colors.primary};
    margin: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.smallRadius};
  `}

  ${media.lessThan(breakpoint)`
    display: block;
    color: white;
    font-style: normal;
  `}
`

export const Items = styled.div`
  display: flex;
  align-items: center;
  ${media.lessThan(breakpoint)`
    flex-direction: column;
  `}
`

export const MainMenu = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
  `}
  ${media.lessThan(breakpoint)`
    flex-direction: column;
    width:100%;
    padding: 0 1rem;
  `}
`

export const UserMenu = styled(MainMenu)`
  display: flex;
  justify-content: flex-end;
`

export const MenuItem = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-family: 'Montserrat';
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    ${media.lessThan(breakpoint)`
      padding: ${theme.spacings.xxsmall} 0;
      border-bottom: ${theme.border.default} ${theme.colors.gray500};
      flex-direction: column;
      width: 100%;
      padding: 1rem;
      display:none;
    `}
  `}
`

export const Logo = styled(MenuItem)`
  ${media.lessThan(breakpoint)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding:0;
    border:0;
  `}
`

type HeaderButtonProps = {
  color?: 'primary' | 'white'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  ${({ theme, color = 'primary' }) => css`
    border: 2px solid ${theme.colors[color]};
    border-radius: 30px;
    background-color: transparent;
    color: ${theme.colors[color]};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xsmall};
    ${media.lessThan(breakpoint)`
      width:100%;
      margin-top:1rem;
      justify-content: center;
      padding:  ${theme.spacings.xxsmall};
      display:none;
    `}
  `}
`

export const Subitem = styled.span`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};
    display: none;
  `}
`

const WrapperModifiers = {
  open: () => css`
    ${MenuItem},
    ${HeaderButton},
    ${Subitem} {
      display: flex;
    }
  `,
  close: () => css`
    ${Logo} {
      display: flex;
    }
  `
}

export const Wrapper = styled.header<{ open: boolean }>`
  ${({ theme, open }) => css`
    background-color: ${theme.colors.black};
    padding: 1rem;
    input {
      display: none;
    }

    ${open && WrapperModifiers.open()};
    ${!open && WrapperModifiers.close()};
  `}
`
