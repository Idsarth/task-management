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
      backgroundColor: '#E0E4E8',
      position: 'relative',
      borderRadius: 200,
      width: '100%',
      height: 5,
    },
    progress: {
      backgroundColor: theme.textSuccessColor,
      width: `${progress}%`,
      position: 'absolute',
      borderRadius: 200,
      height: '100%',
      top: 0,
      left: 0,
    },
    value: {
      color: theme.textSecondaryColor,
      position: 'absolute',
      bottom: '100%',
      fontSize: 13,
      right: 0,
    }
  })
}
