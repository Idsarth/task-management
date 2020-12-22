import { StyleSheet } from 'react-native'

// Import models
import { ITheme } from '../../models'

type Params = {
  theme: ITheme,
  variantStyled: {

  }
}

export const scaffoldStyled = ({ theme, variantStyled }: Params) => {
  const {} = variantStyled
  return StyleSheet.create({
    scaffold: {}
  })
}
