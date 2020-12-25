import React, { ReactElement, ReactNode } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StatusBar
} from 'react-native'

type Props = {
  backgroundColor?: string
  actions: Array<ReactNode>
  title?: string
}

export const AppBar:React.FC<Props> = (props):ReactElement => {
  const {
    title,
    backgroundColor
  } = props
  return (
    <>
      <SafeAreaView style={{ backgroundColor }}>
        <View style={{ backgroundColor }}>
          <Text>{title}</Text>
        </View>
      </SafeAreaView>
    </>
  )
}
