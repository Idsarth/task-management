import { useContext } from 'react'
import { ThemeContext } from '../context'

export const useTheme = () => {
  const theme = useContext(ThemeContext)
  if(!theme) throw new Error('No ThemeContext Provider')
  return theme
}
