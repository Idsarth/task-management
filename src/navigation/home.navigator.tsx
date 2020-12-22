import React, { ReactElement } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Import routes
import { AppRoutes } from '.'

// Import pages
import { HomePage } from '../pages'

const Stack = createStackNavigator()
export const HomeNavigator:React.FC = ():ReactElement => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name={AppRoutes.HOME} component={HomePage} />
    </Stack.Navigator>
  )
}
