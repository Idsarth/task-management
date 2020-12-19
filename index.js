import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import MainComponent from './src/main.component'

AppRegistry.registerComponent(appName, () => MainComponent)
