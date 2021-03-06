import React, { ReactElement } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Import routes
import {
  AppRoutes,
  AuthNavigator,
  HomeNavigator
} from '.'

const Stack = createStackNavigator()
export const AppNavigator:React.FC = ():ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={AppRoutes.HOME} headerMode={'none'}>
        <Stack.Screen name={AppRoutes.AUTH} component={AuthNavigator} />
        <Stack.Screen name={AppRoutes.HOME} component={HomeNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
