import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/dist/shared/lib/router/router'

import theme from 'styles/theme'
import Head from 'components/Head'
import GlobalStyles from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ThemeProvider theme={theme}>
      <Head />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default App
