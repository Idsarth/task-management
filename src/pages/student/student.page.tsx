import React, { ReactElement, useEffect, useState } from 'react'
import {
  Text,
  View
} from 'react-native'

// Import components
import {
  Scaffold,
  SizedBox,
  TabView
} from '../../components/common'

// Import services
import {
  request
} from '../../services'

// Import styled
import { globalStyled, LightTheme } from '../../styled'

export const StudentPage:React.FC = ():ReactElement => {
  const [isFetching, setIsFetching] = useState<boolean>(true)
  const [data, setData] = useState([])
  const global = globalStyled({ theme: LightTheme, variantStyled: {} })

  useEffect(() => {
    request.get('')
      .then(({ data }) => {
        setData(data.technologies)
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsFetching(false)
      })
  }, [])

  if(isFetching) return <Text>Loading...</Text>
  return (
    <Scaffold>
      <SizedBox height={20} />
      <Text style={global.title}>Technologies</Text>
  
      <SizedBox height={20} />
      <TabView data={data} />
    </Scaffold>
  )
}
