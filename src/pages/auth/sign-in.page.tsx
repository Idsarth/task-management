import React, { ReactElement, useState, useCallback } from 'react'
import {
  Text,
} from 'react-native'

// Import components
import { 
  Button,
  Scaffold
} from '../../components/common'

// Import hooks
import { useTheme } from '../../hooks'

// Import theme
import { LightTheme } from '../../styled'

export const SignInPage:React.FC = (): ReactElement => {
  const onPressed = useCallback(async () => {
    
  }, [])

  return (
    <Scaffold>
      <Text>SignInPage</Text>

      <Button
        onPressed={onPressed}
        message={'SIGN IN'}
      />
    </Scaffold>
  )
}
