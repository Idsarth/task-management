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
      color: theme.textPrimaryColor,
      fontWeight: 'bold',
      fontSize: 22,
    },
    subTitle: {
      fontWeight: '600',
      fontSize: 18,
    },
    small: {
      fontSize: 16,
    },
    smallSuccess: {
      color: theme.textSuccessColor,
      fontSize: 16,
    },
    paragraph: {
      color: theme.textSecondaryColor,
      fontSize: 16
    },


    // LAYOUT **********
    flex: {
      flexGrow: 1
    },
    container: {
      paddingHorizontal: 15,
      flex: 1,
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
      backgroundColor: theme.textSecondaryColor,
      height: '100%',
      width: 0.7,
    },


    // DESIGN *******
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
