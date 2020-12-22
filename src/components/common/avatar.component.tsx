import React, { ReactElement } from 'react'
import {
  View
} from 'react-native'
import FastImage, { Source, ResizeMode } from 'react-native-fast-image'

// Import styled
import { avatarStyled, LightTheme } from '../../styled'

type Props = {
  source: Source,
  width?: number
  height?: number
  rounded?: boolean
  resizeMode?: ResizeMode
  decorated?: boolean
}

export const Avatar:React.FC<Props> = ({ source, resizeMode, decorated, ...rest }):ReactElement => {
  const styles = avatarStyled({ theme: LightTheme, variantStyled: { ...rest, decorated } })

  if(decorated) {
    return (
      <View style={styles.decorator}>
        <FastImage
          resizeMode={resizeMode}
          style={styles.avatar}
          source={source}
        />
      </View>
    )
  }

  return (
    <FastImage
      resizeMode={resizeMode}
      style={styles.avatar}
      source={source}
    />
  )
}
