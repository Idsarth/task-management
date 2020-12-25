import React, { ReactElement } from 'react'
import {
  StyleProp,
  View
} from 'react-native'
import FastImage, { Source, ResizeMode, ImageStyle } from 'react-native-fast-image'

// Import styled
import { avatarStyled, LightTheme } from '../../styled'

type Props = {
  source: Source,
  size: 'small' | 'medium' | 'large' | 'xlarge'
  rounded?: boolean
  resizeMode?: ResizeMode
  decorated?: boolean
  styles?: StyleProp<ImageStyle>
}

export const Avatar:React.FC<Props> = ({
  source,
  resizeMode,
  decorated,
  styles: customStyles,
  ...rest
}):ReactElement => {
  const styles = avatarStyled({ theme: LightTheme, variantStyled: { ...rest, decorated } })

  if(decorated) {
    return (
      <View style={styles.decorator}>
        <FastImage
          resizeMode={resizeMode}
          style={[customStyles, styles.avatar]}
          source={source}
        />
      </View>
    )
  }

  return (
    <FastImage
      resizeMode={resizeMode}
      style={[customStyles, styles.avatar]}
      source={source}
    />
  )
}
