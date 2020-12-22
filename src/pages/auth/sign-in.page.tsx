import React, { ReactElement, useState } from 'react'
import {
  Text,
} from 'react-native'

// Import widgets
import { Scaffold } from '../../widgets'

// Import hooks
import { useTheme } from '../../hooks'

// Import theme
import { LightTheme } from '../../styled'

export const SignInPage:React.FC = (): ReactElement => {


  return (
    <Scaffold>
      <Text>SignInPage</Text>
    </Scaffold>
  )
}
