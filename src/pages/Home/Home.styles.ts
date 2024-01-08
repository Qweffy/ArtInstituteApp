import { StyleSheet, ViewStyle } from 'react-native'
import { PrimaryColors } from '../../styles/Colors'
import { largeSpace, smallSpace } from '../../styles/Spacing'

type HomeStyleType = {
  container: ViewStyle
  textInput: ViewStyle
}

export default StyleSheet.create<HomeStyleType>({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: largeSpace },
  textInput: {
    height: 40,
    borderColor: PrimaryColors.LightGray,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: smallSpace,
    marginBottom: 10,
    width: '100%',
  },
})
