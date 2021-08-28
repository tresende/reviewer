import { useState, createContext, useContext } from 'react'

export type LoadingContextData = {
  start: (text: string) => void
  stop: () => void
  loading: boolean
  text: string
}

export const LoadingContextDefaultValues = {
  start: () => null,
  stop: () => null,
  loading: false,
  text: ''
}

export const LoadingContext = createContext<LoadingContextData>(LoadingContextDefaultValues)

export type LoadingProviderProps = {
  children: React.ReactNode
}

const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [state, setState] = useState({
    loading: false,
    text: ''
  })
  const start = (text: string) => setState({ loading: true, text })
  const stop = () => setState({ loading: false, text: '' })

  return (
    <LoadingContext.Provider
      value={{
        start,
        stop,
        ...state
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

const useLoading = () => useContext(LoadingContext)

export { LoadingProvider, useLoading }
