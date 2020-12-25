import React, { ReactElement } from 'react'
import {
  Text
} from 'react-native'

// Import components
import { ListsTechnologies } from '../../components/lists'
import {
  Scaffold,
  SizedBox
} from '../../components/common'

// Import styled
import { globalStyled, LightTheme } from '../../styled'

export const StudentPage:React.FC = ():ReactElement => {
  const global = globalStyled({ theme: LightTheme, variantStyled: {} })
  return (
    <Scaffold>
      <SizedBox height={20} />
      <Text style={global.title}>Categories</Text>

      <SizedBox height={20} />
      <ListsTechnologies />
    </Scaffold>
  )
}
