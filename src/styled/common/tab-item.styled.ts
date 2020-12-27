import { StyleSheet, Dimensions } from 'react-native'


// Import models
import { ITheme } from '../../models'

type Styled = {
  theme: ITheme
}

const { height, width } = Dimensions.get('window')
export default ({ theme }: Styled) => {
  return StyleSheet.create({
    tabs: {},
    content: {
      justifyContent: 'space-between',
      flex: 1,
    },
    title: {
      color: theme.textSecondaryColor
    }
  })
}