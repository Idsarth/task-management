import React, { ReactElement } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

// Import styled
import { bottomNavigationStyled } from '../../styled'

export const BottomNavigation:React.FC<BottomTabBarProps> = (props):ReactElement => {
  const styles = bottomNavigationStyled({})
  return (
    <View style={styles.bottomNavigation}>
      {props.state.routes.map((route, index: number) => {
        return (
          <TouchableOpacity>
            <Text>
              {route.name}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

