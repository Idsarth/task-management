import { StyleSheet } from 'react-native'

// Import models
import { ITheme } from '../../models'

type Styled = {
  theme: ITheme,
  variantStyled: {}
}

export const buttonStyled = ({ theme, variantStyled }: Styled) => {
  return StyleSheet.create({
    button: {
      backgroundColor: theme.backgroundButtonColor,
      borderRadius: 5,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 260
    },
    message: {
      color: theme.textButtonColor,
      textAlign: 'center'
    }
  })
}