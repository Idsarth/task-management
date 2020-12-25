import { StyleSheet, Platform } from 'react-native'

// Import models
import { ITheme } from '../../models'

type Styled = {
  theme: ITheme,
  variantStyled: {}
}

export const globalStyled = ({ theme, variantStyled }:Styled) => {
  return StyleSheet.create({
    // FONTS **********
    bold: {
      fontWeight: 'bold'
    },
    title: {
      fontWeight: 'bold',
      fontSize: 22,
      color: theme.textPrimaryColor
    },
    subTitle: {
      fontWeight: '600',
      fontSize: 18,
    },
    small: {
      fontSize: 16,
    },
    smallSuccess: {
      fontSize: 16,
      color: theme.textSuccessColor
    },
    paragraph: {
      color: theme.textSecondaryColor,
      fontSize: 16
    },
    // LAYOUT **********
    container: {
      paddingHorizontal: 15
    },
    row: {
      flexDirection: 'row'
    },
    justifyBetween: {
      justifyContent: 'space-between'
    },
    justifyCenter: {
      justifyContent: 'center'
    },
    alignCenter: {
      alignItems: 'center'
    },
    divider: {
      height: '100%',
      width: 0.7,
      backgroundColor: theme.textSecondaryColor
    },


    card: {
      backgroundColor: theme.backgroundCardColor,
      paddingHorizontal: 10,
      marginHorizontal: 5,
      paddingVertical: 18,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.00,

      elevation: 1,
    }
  })
}
