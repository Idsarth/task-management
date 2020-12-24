import React, { ReactElement } from 'react'
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'

// Import routes
import { AppRoutes } from '.'

// Import pages
import {
  HomePage,
  ProfilePage,
  StudentPage,
  StatisticPage,
} from '../pages'

// Import components
import { BottomNavigation } from '../components'

const BottomTab = createBottomTabNavigator()
export const HomeNavigator:React.FC = ():ReactElement => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name={AppRoutes.HOME} component={HomePage} />
      <BottomTab.Screen name={AppRoutes.STUDENT} component={StudentPage} />

      <BottomTab.Screen name={AppRoutes.STATISTIC} component={StatisticPage} />
      <BottomTab.Screen name={AppRoutes.PROFILE} component={ProfilePage} />
    </BottomTab.Navigator>
  )
}
