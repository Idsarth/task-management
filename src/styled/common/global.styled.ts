import { StyleSheet } from 'react-native'

// Import models
import { ITheme } from '../../models'

type Params = {
  theme: ITheme,
  variantStyled: {}
}

export const globalStyled = ({ theme, variantStyled }:Params) => {
  return StyleSheet.create({
    row: {
      flexDirection: 'row'
    }
  })
}
