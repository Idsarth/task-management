import React, { ReactElement } from 'react'
import {
  View,
  Text
} from 'react-native'

// Import components
import { Avatar } from './avatar.component'

// Import widgets
import { SizedBox } from '../../widgets'

// Import styled
import { globalStyled, LightTheme } from '../../styled'

type Props = {}
export const Header:React.FC<Props> = (props):ReactElement => {
  const styles = globalStyled({ theme: LightTheme, variantStyled: {  } })
  const {} = props
  return (
    <View style={styles.row}>
      <Avatar
        source={{ uri: 'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg' }}
        height={60}
        width={60}
        rounded
      />
      <SizedBox height={8} />
      <View>
        <Text>Total time</Text>
        <Text>124.04</Text>
        <View>
          <Text>12%</Text>
          <Text>32 courses</Text>
        </View>
      </View>
    </View>
  )
}
