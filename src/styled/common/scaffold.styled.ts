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
      paddingHorizontal: 15,
      flexGrow: 1,
      backgroundColor: theme.backgroundScaffoldColor
    },
    safeArea: {
      flexGrow: 1
    }
  })
}
