import React, { ReactElement } from 'react'
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import {
  createStackNavigator
} from '@react-navigation/stack'

// Import routes
import { 
  AppRoutes as Routes,
  ProfileNavigator,
  StatisticNavigator,
  StudentNavigator
} from '.'

// Import pages
import { HomePage } from '../pages'

// Import components
import { BottomNavigation } from '../components/common'

const Stack = createStackNavigator()
const Home = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name={Routes.HOME} component={HomePage} />
    </Stack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator()
export const HomeNavigator:React.FC = ():ReactElement => {
  return (
    <BottomTab.Navigator initialRouteName={Routes.STUDENT}>
      <BottomTab.Screen name={Routes.HOME} component={Home} />
      <BottomTab.Screen name={Routes.STUDENT} component={StudentNavigator} />

      <BottomTab.Screen name={Routes.STATISTIC} component={StatisticNavigator} />
      <BottomTab.Screen name={Routes.PROFILE} component={ProfileNavigator} />
    </BottomTab.Navigator>
  )
}
