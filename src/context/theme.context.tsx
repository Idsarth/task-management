import React, { createContext, Context } from 'react'

// Import theme
import { LightTheme } from '../styled'

// Import models
import { ITheme } from '../models'

type Theme = {
  theme: ITheme,
  changeTheme: (theme: ITheme) => void
}

export const ThemeContext: Context<Theme> = createContext<Theme>({ theme: LightTheme, changeTheme: () => {} })
