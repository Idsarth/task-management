import React, { ReactElement } from 'react'
import { TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'

type IconTypes = 'MaterialIcons' | 'MaterialCommunityIcons' | 'FontAwesome' | 'FontAwesome5' | 'Ionicons'

type Props = {
  type: IconTypes,
  name: string
  size: number
  color: string
  onPressed?: () => void
  button?: boolean
}

const getIconType = (type: IconTypes) => {
  switch (type) {
    case 'FontAwesome':
      return FontAwesome
    case 'FontAwesome5':
      return FontAwesome5
    case 'Ionicons':
      return Ionicons
    case 'MaterialIcons':
      return MaterialIcons
    case 'MaterialCommunityIcons':
      return MaterialCommunityIcons
  
    default:
      throw new Error(`Is not valid type "${type}".`)
  }
}

export const Icon:React.FC<Props> = (props):ReactElement => {
  const IconComponent = getIconType(props.type)
  IconComponent.loadFont()
  if (props.button) {
    return (
      <TouchableOpacity onPress={props.onPressed}>
        <IconComponent {...props} />
      </TouchableOpacity>
    )
  }
  return <IconComponent {...props} />
}