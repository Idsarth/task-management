import { ITheme } from '../../models'

// Import styled
import { colors } from './colors.theme'
import { typography } from './typography.theme'

export const LightTheme: ITheme = {
  ...colors,
  ...typography
}

export const DarkTheme = {}
