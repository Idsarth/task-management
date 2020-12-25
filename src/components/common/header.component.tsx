import React, { ReactElement } from 'react'
import {
  View,
  Text
} from 'react-native'

// Import components
import {
  Avatar,
  SizedBox
} from '.'

// Import styled
import { globalStyled, LightTheme } from '../../styled'

type Props = {}
export const Header:React.FC<Props> = (props):ReactElement => {
  const styles = globalStyled({ theme: LightTheme, variantStyled: {  } })
  const {} = props
  return (
    <View style={[styles.row, styles.alignCenter]}>
      <Avatar
        source={{ uri: 'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg' }}
        resizeMode={'cover'}
        size={'large'}
        rounded
        decorated
      />
      <SizedBox width={20} />
      <View style={{ backgroundColor: 'transparent'}}>
        <Text style={[styles.small, styles.bold]}>Total time</Text>
        <SizedBox height={3} />
        <Text style={styles.title}>124.04 <Text style={styles.small}>Minutes</Text></Text>

        <SizedBox height={6} />
        <View style={[styles.row, styles.justifyBetween]}>
          <Text style={[styles.small, styles.smallSuccess, styles.bold]}>12.5%</Text>

          <SizedBox width={20} />
          <View style={styles.divider} />

          <SizedBox width={20} />
          <Text style={[styles.small, styles.paragraph]}>32 Courses</Text>
        </View>
      </View>
    </View>
  )
}
