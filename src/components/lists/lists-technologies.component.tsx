import React, { ReactElement } from 'react'
import {
  FlatList, ListRenderItemInfo,
} from 'react-native'

// Import components
import { Technology } from '../technology.component'

interface Technology {
  technologyId: number
  technologyName: string
  technologyUrl: string
  progress: number
  createdAt: string
}

const technologies: Array<Technology> = [
  {
    technologyId: 1,
    technologyName: 'Python',
    technologyUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png',
    progress: 94,
    createdAt: '2 days left'
  },
  {
    technologyId: 2,
    technologyName: 'Docker',
    technologyUrl: 'https://camo.githubusercontent.com/a5ebe427ff0f9d34ceb3a5c08df802b17bda3cba0b0e1f6bebf548a505cf4c7b/68747470733a2f2f7777772e6d756e646f646f636b65722e636f6d2e62722f77702d636f6e74656e742f75706c6f6164732f323031352f30362f646f636b65725f66616365626f6f6b5f73686172652e706e67',
    progress: 50,
    createdAt: '1 days left'
  },
  {
    technologyId: 3,
    technologyName: 'AWS',
    technologyUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png',
    progress: 20,
    createdAt: '4 days left'
  },
  {
    technologyId: 4,
    technologyName: 'Golang',
    technologyUrl: 'https://miro.medium.com/fit/c/262/262/1*yh90bW8jL4f8pOTZTvbzqw.png',
    progress: 23,
    createdAt: '20 days left'
  },
]

export const ListsTechnologies:React.FC = ():ReactElement => {
  const renderItem = ({ item }: ListRenderItemInfo<Technology>):ReactElement => {
    return (
      <Technology />
    )
  }
  return (
    <FlatList
      data={technologies}
      renderItem={renderItem}
      keyExtractor={item => item.technologyId.toString()}
    />
  )
}