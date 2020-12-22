import React, { ReactElement } from 'react'
import {
  Text
} from 'react-native'

// Import widgets
import { Scaffold } from '../widgets'

// Import components
import { LinealChart, Header } from '../components'

export const HomePage:React.FC = ():ReactElement => {
  return (
    <Scaffold>
      <Header />
      <LinealChart />
    </Scaffold>
  )
}
