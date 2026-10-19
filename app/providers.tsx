
'use client'

import { useEffect, type ReactNode } from 'react'
import { Provider, useSelector } from 'react-redux'
import { store } from '../store'
import type { RootState } from '../store'

function ThemeApplier({ children }: { children: ReactNode }) {
  const mode = useSelector((state: RootState) => state.theme.mode)

  useEffect(() => {
    document.body.classList.remove('dark', 'light')
    document.body.classList.add(mode)
  }, [mode])

  return children
}

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeApplier>{children}</ThemeApplier>
    </Provider>
  )
}
