import { createGlobalStyle, css, DefaultTheme, GlobalStyleComponent } from 'styled-components'

const GlobalStyles: GlobalStyleComponent<null, DefaultTheme> = createGlobalStyle`

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: local('Montserrat-Regular'),
    url('https://fonts.gstatic.com/s/montserrat/v7/zhcz-_WihjSQC0oHJ9TCYAzyDMXhdD8sAj6OAJTFsBI.woff2') format('woff2');

}
@font-face {
  font-family:'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: local('Montserrat-Bold'),
    url('https://fonts.gstatic.com/s/montserrat/v7/IQHow_FEYlDC4Gzy_m8fcmaVI6zN22yiurzcBKxPjFE.woff2') format('woff2');

}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans'), local('OpenSans'),
    url('https://fonts.gstatic.com/s/opensans/v13/K88pR3goAWT7BTt32Z01m4X0hVgzZQUfRDuZrPvH3D8.woff2') format('woff2');
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans'), local('OpenSans'),
    url('https://fonts.gstatic.com/s/opensans/v13/RjgO7rYTmqiVp7vzi-Q5UYX0hVgzZQUfRDuZrPvH3D8.woff2') format('woff2');
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans'), local('OpenSans'),
    url('https://fonts.gstatic.com/s/opensans/v13/LWCjsQkB6EMdfHrEVqA1KYX0hVgzZQUfRDuZrPvH3D8.woff2') format('woff2');
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans'), local('OpenSans'),
    url('https://fonts.gstatic.com/s/opensans/v13/xozscpT2726on7jbcb_pAoX0hVgzZQUfRDuZrPvH3D8.woff2') format('woff2');
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans'), local('OpenSans'),
    url('https://fonts.gstatic.com/s/opensans/v13/59ZRklaO5bWGqF5A9baEEYX0hVgzZQUfRDuZrPvH3D8.woff2') format('woff2');
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans'), local('OpenSans'),
    url('https://fonts.gstatic.com/s/opensans/v13/u-WUoqrET9fUeobQW7jkRYX0hVgzZQUfRDuZrPvH3D8.woff2') format('woff2');
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans'), local('OpenSans'),
    url('https://fonts.gstatic.com/s/opensans/v13/cJZKeOuBrn4kERxqtaUH3ZBw1xU1rKptJj_0jans920.woff2') format('woff2');
}


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html,
    body,
    body > div:first-child,
    div#__next,
    div#__next > main {
      height: 100%;
    }

    html {
      font-size: 62.5%;
    }

    ::selection {
      background: ${theme.colors.primary};
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }

    p {
      line-height: 2rem;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.primary};
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`

export default GlobalStyles
