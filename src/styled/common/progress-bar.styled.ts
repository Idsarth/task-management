import { StyleSheet } from 'react-native'

// Import models
import { ITheme } from '../../models'

type Styled = {
  theme: ITheme,
  variantStyled: {
    progress: number
  }
}

export const progressBarStyled = ({ theme, variantStyled }: Styled) => {
  const {
    progress
  } = variantStyled
  return StyleSheet.create({
    progressBar: {
      height: 5,
      width: '100%',
      borderRadius: 200,
      backgroundColor: '#E0E4E8',
      position: 'relative'
    },
    progress: {
      borderRadius: 200,
      backgroundColor: 'green',
      position: 'absolute',
      top: 0,
      left: 0,
      width: `${progress}%`,
      height: '100%'
    },
    value: {
      position: 'absolute',
      bottom: '100%',
      right: 0
    }
  })
}
