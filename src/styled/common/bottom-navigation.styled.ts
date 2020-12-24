import { StyleSheet } from 'react-native'

type Params = {}

export const bottomNavigationStyled = ({}: Params) => {
  return StyleSheet.create({
    bottomNavigation: {
      justifyContent: 'center',
      backgroundColor: '#ccc',
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      height: 74,
    }
  })
}
