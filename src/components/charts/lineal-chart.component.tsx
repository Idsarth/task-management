import React, { ReactElement } from 'react'
import {
  View,
  Dimensions
} from 'react-native'
import { LineChart } from 'react-native-chart-kit'

type Props = {}

const { width } = Dimensions.get('screen')
export const LinealChart:React.FC<Props> = ():ReactElement => {
  return (
    <LineChart
      data={{
        labels: ["Python", "Docker", "AWS", "IA", "Kali",],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ]
          }
        ]
      }}
      width={width}
      height={220}
      chartConfig={{
        backgroundColor: "#fff",
        backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `#0683FF`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0)`,
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#0683FF"
        }
      }}
    />
  )
}
