import { StyleSheet } from 'react-native'

// Import models
import { ITheme } from 'src/models'

type Styled = {
  theme: ITheme
  variantStyled: {
    measures: Array<{ x: number, y: number, height: number, width: number }>
  }
}

export default ({ theme, variantStyled }: Styled) => {
  const {
    measures
  } = variantStyled
  return StyleSheet.create({
    indicator: {
      backgroundColor: theme.textSuccessColor,
      position: 'absolute',
      bottom: -10,
      height: 4,
      left: 0,
    }
  })
}