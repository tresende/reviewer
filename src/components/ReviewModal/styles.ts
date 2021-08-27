import styled, { css, createGlobalStyle } from 'styled-components'

type WrapperProps = {
  open?: boolean
}
export const GlobalStyle = createGlobalStyle`
  body {
    overflow:hidden
  }
`

const WrapperModifiers = {
  open: () => css`
    display: flex;
    animation: fadein 0.4s;
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
  close: () => css`
    pointer-events: none;
    animation: fadeout 0.4s;
    opacity: 0;
    @keyframes fadeout {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, open }) => css`
    width: 100%;
    height: 100vh;
    position: fixed;
    margin-right: ${theme.spacings.small};
    display: flex;
    background: rgba(0, 0, 0, 0.45);
    z-index: ${theme.layers.overlay};
    justify-content: center;
    align-items: center;
    ${open && WrapperModifiers.open()};
    ${!open && WrapperModifiers.close()};
  `}
`

export const Modal = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 20px;
  background-color: white;
`
