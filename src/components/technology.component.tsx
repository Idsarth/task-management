import React, { ReactElement } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import FastImage from 'react-native-fast-image'

// Import styled
import { 
  globalStyled, 
  technologyStyled, 
  LightTheme
} from '../styled'

// Import components
import { ProgressBar } from './common/'

type Props = {
  technologyId: number
  technologyName: string
  technologyUrl: string
  progress: number
  createdAt: string
  onPressed: () => void
}

export const Technology:React.FC<Props> = (props): ReactElement => {
  const global = globalStyled({ theme: LightTheme, variantStyled: {} })
  const styles = technologyStyled({ theme: LightTheme, variantStyled: {} })
  const {
    technologyName,
    technologyUrl,
    progress,
    createdAt,
    onPressed
  } = props
  return (
    <TouchableOpacity onPress={onPressed}>
      <View style={[global.card]}>
        <View style={[global.row]}>
          <FastImage
            source={{ uri: technologyUrl }}
            resizeMode={'cover'}
            style={styles.image}
          />
          <Text>{technologyName}</Text>
        </View>

        <ProgressBar progress={progress} />

        <View style={styles.time}>
          <Text style={styles.value}>{createdAt}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}