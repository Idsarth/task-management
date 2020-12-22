import React, { ReactElement } from 'react'
import {
  Text,
  View
} from 'react-native'

// Import widgets
import { Scaffold, SizedBox } from '../widgets'

// Import components
import {
  LinealChart,
  Header
} from '../components'

// Import styles
import { globalStyled, LightTheme } from '../styled'

export const HomePage:React.FC = ():ReactElement => {
  const styles = globalStyled({ theme: LightTheme, variantStyled: {} })
  return (
    <Scaffold>
      <SizedBox height={20}/>
      <View style={[styles.row]}>
        <SizedBox width={20} />
        <Header />
      </View>
      <SizedBox height={35} />
      <LinealChart />
    </Scaffold>
  )
}
