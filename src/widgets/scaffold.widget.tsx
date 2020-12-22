import React, { ReactElement, ReactNode, ReactNodeArray } from 'react'
import {
  ScrollView,
  SafeAreaView
} from 'react-native'

// Import hooks
import { useTheme } from '../hooks'

type Props = {
  backgroundColor?: string
  appBar?: ReactNode
  bottomNavigationBar?: ReactNode
  children?: ReactNode | ReactNodeArray
}

export const Scaffold:React.FC<Props> = (props):ReactElement => {
  const { theme } = useTheme()
  const {
    appBar,
    backgroundColor = theme.backgroundScaffoldColor,
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
      <SafeAreaView style={{ flexGrow: 1 }}>
        {children}
      </SafeAreaView>
    </ScrollView>
  )
}
