import React, { ReactElement } from 'react'
import {
  Text
} from 'react-native'

// Import components
import { ListsTechnologies } from '../../components/lists'
import {
  Scaffold
} from '../../components/common'

export const StudentPage:React.FC = ():ReactElement => {
  return (
    <Scaffold>
      <Text>StudentPage</Text>

      <ListsTechnologies />
    </Scaffold>
  )
}
