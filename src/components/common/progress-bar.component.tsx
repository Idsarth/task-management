import React, { ReactElement } from 'react'
import {
  View,
  Text,

} from 'react-native'

// Import styled
import { LightTheme, progressBarStyled } from '../../styled'

type Props = {
  progress: number
}

export const ProgressBar:React.FC<Props> = (props):ReactElement => {
  const { progress } = props
  const styles = progressBarStyled({ theme: LightTheme, variantStyled: { progress } })
  return (
    <View style={styles.progressBar}>
      <View style={styles.progress}>
        <Text style={styles.value}>{progress}%</Text>
      </View>
    </View>
  )
}