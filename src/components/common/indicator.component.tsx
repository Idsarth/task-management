import React, { ReactElement } from 'react'
import {
  View,
  Animated,
  Dimensions,
} from 'react-native'

// Import styled
import {
  indicatorStyled, LightTheme
} from '../../styled'

interface Technology {
  technologyId: number
  technologyName: string
  technologyUrl: string
  progress: number
  createdAt: string
  status: string
}
type Props = {
  scrollX: Animated.Value
  measures: Array<{ x: number, y: number, height: number, width: number }>
  data: Array<Technology>
}

const { width } = Dimensions.get('window')
export const Indicator:React.FC<Props> = ({ measures, scrollX, data }):ReactElement => {
  const styles = indicatorStyled({ theme: LightTheme, variantStyled: { measures } })
  const inputRange = data.map((_, index:number) => index * (width - 20))
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map(measure => measure.width)
  })
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map(measure => {
      return measure.x
    })
  })
  return (
    <Animated.View
      style={[
        { 
          width: indicatorWidth,
          transform: [{
            translateX
          }]
        },
        styles.indicator
      ]}
    />
  )
}