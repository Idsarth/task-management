import React, { ReactElement } from 'react'
import {
  FlatList,
  View,
} from 'react-native'

type Props = {

}

export const Swipe:React.FC<Props> = (props):ReactElement => {
  return (
    <FlatList
      data={[]}
      renderItem={()=> null}
      horizontal

    />
  )
}
