'use client'

import { Provider, useSelector } from 'react-redux'
import { store } from '../store'
import { RootState } from '../store'
import { useEffect } from 'react'

function ThemeApplier({ children }: { children: React.ReactNode }) {
  const mode = useSelector((state: RootState) => state.theme.mode)

  useEffect(() => {
    document.body.className = mode
  }, [mode])

  return children
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeApplier>{children}</ThemeApplier>
    </Provider>
  )
}
