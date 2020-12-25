import React, { ReactElement } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Import pages
import {
  StatisticPage
} from '../pages/statistic'

// Import routes
import { AppRoutes as Routes } from '.'

const Stack = createStackNavigator()
export const StatisticNavigator = ():ReactElement => {
  return (
    <Stack.Navigator headerMode={'none'}>   
      <Stack.Screen name={Routes.STATISTIC} component={StatisticPage} />
    </Stack.Navigator>
  )
}