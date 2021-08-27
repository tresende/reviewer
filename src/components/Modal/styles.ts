import styled, { css, createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

export const GlobalStyle = createGlobalStyle`
  body {
    overflow:hidden
  }
`

const WrapperModifiers = {
  close: () => css`
    pointer-events: none;
  `
}

export const Wrapper = styled.div<{ open: boolean }>`
  ${({ theme, open }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    margin-right: ${theme.spacings.small};
    display: flex;
    background: rgba(0, 0, 0, 0.45);
    z-index: ${theme.layers.overlay};
    justify-content: center;
    align-items: center;
    ${!open && WrapperModifiers.close()};
    ${media.lessThan('small')`
      align-items: flex-end;
    `}
  `}
`

export const Modal = styled.div`
  ${({ theme }) => css`
    max-width: 600px;
    min-height: 400px;
    pointer-events: auto;
    border-radius: ${theme.border.mediumRadius};
    background-color: white;
    ${media.lessThan('small')`
      min-height: 80%;
    `}
  `}
`
