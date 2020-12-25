import React, { ReactElement } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

// Import styled
import { 
  technologyStyled, 
  globalStyled, 
  LightTheme,
} from '../styled'

// Import components
import { 
  ProgressBar,
  SizedBox,
  Icon,
  Avatar
} from './common'

type Props = {
  technologyId: number
  technologyName: string
  technologyUrl: string
  progress: number
  createdAt: string
  onPressed: () => void
}

export const Technology:React.FC<Props> = (props): ReactElement => {
  const global = globalStyled({ theme: LightTheme, variantStyled: {} })
  const styles = technologyStyled({ theme: LightTheme, variantStyled: {} })
  const {
    technologyName,
    technologyUrl,
    progress,
    createdAt,
    onPressed
  } = props

  const handleToggleDropdown = () => {}

  return (
    <TouchableOpacity onPress={onPressed}>
      <View style={[global.card, styles.card]}>
        <View style={[global.row, global.justifyBetween]}>
          <View style={[global.row]}>
            <Avatar
              source={{ uri: technologyUrl }}
              resizeMode={'contain'}
              size={'medium'}
            />

            <SizedBox width={20} />
            <View>
              <Text style={[global.small, global.bold, styles.category]}>{technologyName}</Text>

              <SizedBox height={3} />
              <TouchableOpacity>
                <View style={[global.row, global.alignCenter, global.justifyCenter]}>
                  <Icon
                    type={'FontAwesome'}
                    name={'external-link'}
                    size={15}
                    color={LightTheme.iconColor}
                  />

                  <SizedBox width={5} />
                  <Text style={styles.link}>springfieldmedia.com</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <Icon
            type={'Ionicons'}
            name={'ios-ellipsis-horizontal-sharp'}
            size={28}
            color={LightTheme.iconColor}
            button
            onPressed={handleToggleDropdown}
          />
        </View>

        <SizedBox height={20} />
        <ProgressBar progress={progress} />

        <SizedBox height={13} />
        <View style={[styles.time, global.row, global.alignCenter]}>
          <Icon type={'Ionicons'} name={'time-outline'} size={20} color={LightTheme.textErrorColor} />

          <SizedBox width={5} />
          <Text style={styles.value}>{createdAt}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}