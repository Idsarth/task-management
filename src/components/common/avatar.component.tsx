import React, { ReactElement } from 'react'
import {

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
}

export const Avatar:React.FC<Props> = ({ source, resizeMode, ...rest }):ReactElement => {
  const styles = avatarStyled({ theme: LightTheme, variantStyled: { ...rest } })

  return (
    <FastImage
      resizeMode={resizeMode}
      style={styles.avatar}
      source={source}
    />
  )
}
