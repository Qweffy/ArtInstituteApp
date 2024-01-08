import { ViewStyle } from 'react-native'

export type ButtonProps = {
  mainColor?: string
  disabled?: boolean
  label: string
  containerStyles?: ViewStyle
  buttonStyles?: ViewStyle
  labelStyles?: ViewStyle
  onPress: (() => {}) | (() => void)
  isLoading?: boolean
}
