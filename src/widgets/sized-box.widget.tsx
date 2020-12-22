import React, { ReactElement } from 'react'
import {
  View
} from 'react-native'

// Import styled
import { sizedBoxStyled, LightTheme } from '../styled'

type Props = {
  width?: number
  height?: number
}
export const SizedBox:React.FC<Props> = ({ width = 0, height = 0 }: Props):ReactElement => {
  if(!width && !height) new Error(`The props "width" or "height" is required. `)
  const styles = sizedBoxStyled({ theme: LightTheme, variantStyled: { width, height }})
  return <View style={styles.sizedBox} />
}
