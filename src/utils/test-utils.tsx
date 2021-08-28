import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import { LoadingContext, LoadingContextData, LoadingContextDefaultValues } from 'hooks/use-loading'

type CustomRenderProps = {
  loadingProviderProps?: LoadingContextData
} & Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  { loadingProviderProps = LoadingContextDefaultValues, ...renderOptions }: CustomRenderProps = {}
) =>
  render(
    <ThemeProvider theme={theme}>
      <LoadingContext.Provider value={loadingProviderProps}>{ui}</LoadingContext.Provider>
    </ThemeProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
