import React, { ReactElement } from 'react'
import {
  Text
} from 'react-native'

// Import widgets
import { Scaffold } from '@widgets'

export const HomePage:React.FC = ():ReactElement => {
  return (
    <Scaffold>
      <Text>HomPage</Text>
    </Scaffold>
  )
}
