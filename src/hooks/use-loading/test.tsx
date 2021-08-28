import { renderHook } from '@testing-library/react-hooks'
import { act } from '@testing-library/react'
import { useLoading, LoadingProvider, LoadingProviderProps } from '.'

describe('useLoading', () => {
  it('should start loading and set loading message text', () => {
    const wrapper = ({ children }: LoadingProviderProps) => <LoadingProvider>{children}</LoadingProvider>

    const { result } = renderHook(() => useLoading(), {
      wrapper
    })

    expect(result.current.loading).toBeFalsy()
    act(() => {
      result.current.start('Saving')
    })
    expect(result.current.loading).toBeTruthy()
    expect(result.current.text).toBe('Saving')
  })

  it('should stop loading and clear values', () => {
    const wrapper = ({ children }: LoadingProviderProps) => <LoadingProvider>{children}</LoadingProvider>

    const { result } = renderHook(() => useLoading(), {
      wrapper
    })

    act(() => {
      result.current.start('Saving')
      result.current.stop()
    })

    expect(result.current.loading).toBeFalsy()
    expect(result.current.text).toBe('')
  })
})
