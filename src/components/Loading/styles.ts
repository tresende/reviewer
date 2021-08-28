import styled, { css, createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    overflow:hidden
  }
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    font-weight: bold;
    z-index: ${theme.layers.alwaysOnTop};
    text-align: center;
  `};
`

export const Logo = styled.img`
  margin-top: 1rem;
  animation: spin 2000ms linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
