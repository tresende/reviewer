import styled, { css, createGlobalStyle } from 'styled-components'

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
    position: absolute;
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
  `}
`

export const Modal = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 20px;
  background-color: white;
`
