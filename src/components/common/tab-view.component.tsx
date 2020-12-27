import React, { ReactElement, useRef, useCallback, useEffect } from 'react'
import {
  Text,
  View,
  Animated,
  FlatList,
  Dimensions,
  ListRenderItemInfo,
} from 'react-native'

// Import components
import {
  Tabs,
  SizedBox
} from '.'
import {
  ListsTechnologies
} from '../lists'

// Import styled
import { LightTheme, tabViewStyled as customStyles } from '../../styled'

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

const { width } = Dimensions.get('window')
export const TabView:React.FC<Props> = ({ data }):ReactElement => {
  const styles = customStyles({ theme: LightTheme, variantStyled: {} })
  const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current
  const flatList = useRef<FlatList<Technology>>(null)

  const goToTab = useCallback((tabIndex: number) => {
    flatList.current?.scrollToOffset({
      offset: tabIndex * (width - 20),
      animated: true
    })
  }, [])
  const renderItem = ({ item }: ListRenderItemInfo<Technology>) => {
    return (
      <View style={[styles.tabView]}>
        <Text style={styles.title}>{item.status}</Text>
      </View>
    )
  }

  return (
    <>
      <Tabs
        data={data}
        scrollX={scrollX}
        goToTab={goToTab}
      />

      <SizedBox height={20} />
      <Animated.FlatList
        horizontal
        data={data}
        pagingEnabled
        ref={flatList}
        bounces={false}
        scrollEnabled={true}
        renderItem={renderItem}
        style={{ width: width - 20 }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: Technology) => item.technologyId.toString()}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
      />
    </>
  )
}