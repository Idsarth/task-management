import { StyleSheet, Dimensions } from 'react-native'

// Import models
import { ITheme } from '../../models'

type Styled = {
  theme: ITheme,
  variantStyled: {}
}

const { width, height } = Dimensions.get('window')
export const tabViewStyled = ({ theme }: Styled) => {
  return StyleSheet.create({
    tabView: {
      width: width - 20,
    },
    title: {}
  })
}