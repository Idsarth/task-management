import React, { ReactElement, ReactNode, ReactNodeArray } from 'react'
import {
  ScrollView,
  SafeAreaView
} from 'react-native'

// Import hooks
import { useTheme } from '../hooks'

// Import styled
import { scaffoldStyled } from '../styled'

type Props = {
  backgroundColor?: string
  appBar?: ReactNode
  bottomNavigationBar?: ReactNode
  children?: ReactNode | ReactNodeArray
}

export const Scaffold:React.FC<Props> = (props):ReactElement => {
  const { theme } = useTheme()
  const styles = scaffoldStyled({ theme: theme, variantStyled: { }})
  const {
    appBar,
    bottomNavigationBar,
    children,
  } = props
  return (
    <ScrollView
      keyboardShouldPersistTaps={'always'}
      showsVerticalScrollIndicator={false}
      style={styles.scaffold}
      contentContainerStyle={{}}
    >
      <SafeAreaView style={styles.scaffold}>
        {children}
      </SafeAreaView>
    </ScrollView>
  )
}
