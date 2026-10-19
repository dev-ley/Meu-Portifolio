
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type Language = 'pt' | 'en'

interface LanguageState {
  current: Language
}

const initialState: LanguageState = {
  current: 'pt',
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.current = action.payload
    },
    toggleLanguage: (state) => {
      state.current = state.current === 'pt' ? 'en' : 'pt'
    },
  },
})

export const { setLanguage, toggleLanguage } = languageSlice.actions

export default languageSlice.reducer
