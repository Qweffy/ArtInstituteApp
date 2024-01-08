import { StyleSheet, ViewStyle } from 'react-native'
import { smallSpace } from '../../styles/Spacing'

type ButtonStyleType = {
  container: ViewStyle
  flex: ViewStyle
}

export default StyleSheet.create<ButtonStyleType>({
  container: {
    flex: 1,
    marginHorizontal: smallSpace,
  },
  flex: {
    flex: 1,
  },
})
