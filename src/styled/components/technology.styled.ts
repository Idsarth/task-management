import { StyleSheet } from 'react-native'

// Import models
import { ITheme } from '../../models'

type Styled = {
  theme: ITheme,
  variantStyled: {}
}

export const technologyStyled = ({ theme, variantStyled }: Styled) => {

  return StyleSheet.create({
    image: {
      height: 50,
      width: 50
    },
    time: {
      backgroundColor: theme.errorColor,
      borderRadius: 5,
      paddingHorizontal: 8,
      paddingVertical: 4
    },
    value: {
      color: theme.textErrorColor,
      fontWeight: 'bold',
    }
  })
}
