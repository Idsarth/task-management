import { StyleSheet } from 'react-native'

// Import models
import { ITheme } from '../../models'

type Params = {
  theme: ITheme,
  variantStyled: {
    width?: number
    height?: number
    rounded?: boolean
  }
}

export const avatarStyled = ({ theme, variantStyled }: Params) => {
  const {
    height,
    width,
    rounded
  } = variantStyled
  return StyleSheet.create({
    avatar: {
      borderRadius: rounded ? 200 : 0,
      width,
      height,
    }
  })
}
