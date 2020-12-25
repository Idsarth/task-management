import { StyleSheet } from 'react-native'

// Import models
import { ITheme } from '../../models'

type Styled = {
  theme: ITheme,
  variantStyled: {}
}

export const technologyStyled = ({ theme, variantStyled }: Styled) => {

  return StyleSheet.create({
    card: {
      backgroundColor: theme.backgroundScaffoldColor,
    },
    image: {
      borderRadius: 10,
    },
    time: {
      backgroundColor: theme.errorColor,
      alignSelf: 'flex-start',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 5,
    },
    value: {
      color: theme.textErrorColor,
      fontWeight: '600',
    },
    category: {
      marginTop: 5
    },
    link: {
      color: theme.textSecondaryColor,
      fontSize: 14,
      bottom: 1.5
    }
  })
}
