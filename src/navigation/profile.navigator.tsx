import React, { ReactElement } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Import pages
import {
  ProfilePage
} from '../pages/profile'

// Import routes
import { AppRoutes as Routes } from '.'

const Stack = createStackNavigator()
export const ProfileNavigator = ():ReactElement => {
  return (
    <Stack.Navigator headerMode={'none'}>   
      <Stack.Screen name={Routes.PROFILE} component={ProfilePage} />
    </Stack.Navigator>
  )
}