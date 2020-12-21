import React, { ReactElement } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Import pages
import { SignInPage } from '@pages'

// Import routes
import { AppRoutes } from '@navigation'

const Stack = createStackNavigator()
export const AuthNavigator:React.FC = ():ReactElement => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppRoutes.SIGN_IN}
        component={SignInPage}
        options={{
          animationTypeForReplace: 'pop'
        }}
      />
    </Stack.Navigator>
  )
}
