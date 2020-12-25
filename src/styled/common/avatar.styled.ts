import { StyleSheet } from 'react-native'

// Import models
import { ITheme } from '../../models'

const AvatarSizes = {
  small: 34,
  medium: 50,
  large: 75,
  xlarge: 150
}

type Styled = {
  theme: ITheme,
  variantStyled: {
    size: 'small' | 'medium' | 'large' | 'xlarge',
    rounded?: boolean
    decorated?: boolean
  }
}

export const avatarStyled = ({ theme, variantStyled }: Styled) => {
  const {
    size,
    rounded,
    decorated
  } = variantStyled
  return StyleSheet.create({
    avatar: {
      borderRadius: rounded ? 200 : 0,
      width: decorated ? '100%' : AvatarSizes[size],
      height: decorated ? '100%' : AvatarSizes[size],
    },
    decorator: {
      width: AvatarSizes[size],
      height: AvatarSizes[size],
      padding: 3,
      borderWidth: 3,
      borderColor: 'blue',
      borderRadius: 200,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
}
