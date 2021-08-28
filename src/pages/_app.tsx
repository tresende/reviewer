import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/dist/shared/lib/router/router'
import 'animate.css'

import theme from 'styles/theme'
import Head from 'components/Head'
import GlobalStyles from 'styles/global'
import Loading from 'components/Loading'
import { LoadingProvider } from 'hooks/use-loading'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <LoadingProvider>
      <ThemeProvider theme={theme}>
        <Head />
        <GlobalStyles />
        <Loading />
        <Component {...pageProps} />
      </ThemeProvider>
    </LoadingProvider>
  </>
)

export default App
