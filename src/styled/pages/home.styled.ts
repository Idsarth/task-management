import { StyleSheet } from 'react-native'

// Import models
import { ITheme } from '../../models'

type Params = {
  theme: ITheme,
  variantStyled: {}
}

export const homeStyled = ({ theme, variantStyled }: Params) => {
  return StyleSheet.create({
    header: {

    }
  })
}
