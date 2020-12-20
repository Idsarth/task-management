import React, { ReactElement, ReactNode, ReactNodeArray } from 'react'
import {
  ScrollView
} from 'react-native'

type Props = {
  backgroundColor?: string
  appBar?: ReactNode
  bottomNavigationBar?: ReactNode
  children?: ReactNodeArray
}

export const Scaffold:React.FC<Props> = (props):ReactElement => {
  const {
    appBar,
    backgroundColor,
    bottomNavigationBar,
    children,
  } = props
  return (
    <ScrollView
      keyboardShouldPersistTaps={'always'}
      showsVerticalScrollIndicator={false}
      style={{ flexGrow: 1, backgroundColor }}
      contentContainerStyle={{}}
    >
      {children}
    </ScrollView>
  )
}
