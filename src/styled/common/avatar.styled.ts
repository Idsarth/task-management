import { StyleSheet } from 'react-native'

// Import models
import { ITheme } from '../../models'

type Params = {
  theme: ITheme,
  variantStyled: {
    width?: number
    height?: number
    rounded?: boolean
    decorated?: boolean
  }
}

export const avatarStyled = ({ theme, variantStyled }: Params) => {
  const {
    height,
    width,
    rounded,
    decorated
  } = variantStyled
  return StyleSheet.create({
    avatar: {
      borderRadius: rounded ? 200 : 0,
      width: decorated ? '100%' : width,
      height: decorated ? '100%' : height,
    },
    decorator: {
      width,
      height,
      padding: 3,
      borderWidth: 3,
      borderColor: 'blue',
      borderRadius: 200,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
}
