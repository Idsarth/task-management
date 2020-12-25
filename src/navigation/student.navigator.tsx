import React, { ReactElement } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Import pages
import {
  StudentPage
} from '../pages/student'

// Import routes
import { AppRoutes as Routes } from '.'

const Stack = createStackNavigator()
export const StudentNavigator = ():ReactElement => {
  return (
    <Stack.Navigator headerMode={'none'}>   
      <Stack.Screen name={Routes.STUDENT} component={StudentPage} />
    </Stack.Navigator>
  )
}