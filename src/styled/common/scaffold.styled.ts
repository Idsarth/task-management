import { StyleSheet } from 'react-native'

// Import models
import { ITheme } from '../../models'

type Styled = {
  theme: ITheme,
  variantStyled: {

  }
}

export const scaffoldStyled = ({ theme, variantStyled }: Styled) => {
  const {} = variantStyled
  return StyleSheet.create({
    scaffold: {
      backgroundColor: theme.backgroundScaffoldColor,
      paddingHorizontal: 10,
      flexGrow: 1,
    },
    safeArea: {
      flexGrow: 1,
    }
  })
}
