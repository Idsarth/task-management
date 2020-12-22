import { StyleSheet } from 'react-native'

// Import models
import { ITheme } from '../../models'

type Params = {
  theme: ITheme,
  variantStyled: {
    height: number
    width: number
  }
}

export const sizedBoxStyled = ({ theme, variantStyled }: Params) => {
  const { width, height } = variantStyled
  return StyleSheet.create({
    sizedBox: {
      width,
      height,
    }
  })
}
