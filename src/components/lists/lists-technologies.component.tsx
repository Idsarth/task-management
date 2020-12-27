import React, { ReactElement, useCallback } from 'react'
import {
  FlatList, ListRenderItemInfo,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

// Import components
import { Technology } from '../technology.component'
import { SizedBox } from '../common'

// Import routes
import { AppRoutes as Routes } from '../../navigation'

interface Technology {
  technologyId: number
  technologyName: string
  technologyUrl: string
  progress: number
  createdAt: string
  status: 'ALL' | 'CURRENT' | 'PENDING' | 'COMPLETED'
}

type Props = {
  data: Array<Technology>
}

export const ListsTechnologies:React.FC<Props> = ({ data }):ReactElement => {
  const { navigate } = useNavigation()
  const onPressed = useCallback((technologyId: number) => {
    // navigate(Routes.)
  }, [])
  const renderItem = ({ item }: ListRenderItemInfo<Technology>):ReactElement => {
    return (
      <>
        <Technology
          {...item}
          onPressed={() => onPressed(item.technologyId)}
        />
        <SizedBox height={10} />
      </>
    )
  }
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.technologyId.toString()}
    />
  )
}