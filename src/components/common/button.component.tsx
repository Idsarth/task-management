import React from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'

// Import styled
import { buttonStyled, LightTheme, globalStyled } from '../../styled'

type Props = {
  message: string
  onPressed: () => void
}
export const Button:React.FC<Props> = (props) => {
  const styles = buttonStyled({ theme: LightTheme, variantStyled: {} })
  const global = globalStyled({ theme: LightTheme, variantStyled: {} })
  const {
    message,
    onPressed
  } = props
  return (
    <TouchableOpacity onPress={onPressed}>
      <View style={styles.button}>
        <Text style={[styles.message, global.small]}>{message}</Text>
      </View>
    </TouchableOpacity>
  )
}
