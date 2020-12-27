import React, { ReactElement, useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  Animated,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

// Import components
import { Indicator } from '.'

// Import styles
import { LightTheme, tabItemStyled, globalStyled } from '../../styled'

interface Technology {
  technologyId: number
  technologyName: string
  technologyUrl: string
  progress: number
  createdAt: string
  status: string
}
type TabProps = {
  item: Technology
  scrollX: Animated.Value
  goToTab: () => void
}

type TabsProps = {
  data: Array<Technology>
  scrollX: Animated.Value
  goToTab: (itemIndex: number) => void
}

export const TabItem: React.ForwardRefExoticComponent<TabProps & React.RefAttributes<View>> = React.forwardRef<View, TabProps>(({ item, goToTab }, ref) => {
  const styles = tabItemStyled({ theme: LightTheme })
  const global = globalStyled({ theme: LightTheme, variantStyled: { length: 4 } })
  return (
    <TouchableOpacity onPress={goToTab}>
      <View ref={ref}>
        <Text style={[styles.title, global.bold]}>{item.status}</Text>
      </View>
    </TouchableOpacity>
  )
})

export const Tabs:React.FC<TabsProps> = (props):ReactElement => {
  const global = globalStyled({ theme: LightTheme, variantStyled: { length: 4 } })
  const styles = tabItemStyled({ theme: LightTheme })
  const { data, scrollX, goToTab } = props

  const [measures, setMeasures] = useState<Array<{ x: number, y: number, height: number, width: number }>>([])

  const tabRef = useRef<View>(null)
  const refs = useRef<Array<View>>([])
  refs.current = []

  useEffect(() => {
    const m: Array<{x: number, y: number, width: number, height: number}> = []
    refs.current.map(ref => {
      ref.measureLayout(tabRef.current, (x: number, y: number, width: number, height: number) => {
        m.push({ x, y, width, height })
        if(m.length ===  data.length) {
          setMeasures(m)
        }
      }, () => {})
    })
  }, [])

  const addToRefs = (ref: View) => {
    if(ref && !refs.current.includes(ref)) {
      refs.current.push(ref)
    }
  }

  return (
    <View style={styles.tabs}>
      <View ref={tabRef} style={[styles.content, global.row]}>
        {data.map((item: Technology, index: number) => {
          return (
            <TabItem
              goToTab={() => goToTab(index)} 
              key={item.technologyId} 
              scrollX={scrollX}
              ref={addToRefs}
              item={item}
            />
          )
        })}
      </View>

      {measures.length > 0 && <Indicator scrollX={scrollX} measures={measures} data={data} />}
    </View>
  )

}