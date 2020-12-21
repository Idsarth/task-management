import React, { ReactElement } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Import routes
import { AppRoutes } from '@navigation'

// Import pages
import { HomePage } from '@pages'

const Stack = createStackNavigator()
export const HomeNavigator:React.FC = ():ReactElement => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppRoutes.HOME} component={HomePage} />
    </Stack.Navigator>
  )
}
