import { Dimensions, StyleSheet, ViewStyle } from 'react-native'
import { PrimaryColors } from '../../styles/Colors'
import { largeSpace, mediumSpace } from '../../styles/Spacing'
import { bodyRegular, h2Headline } from '../../styles/Fonts'

const cardWidth = Dimensions.get('window').width * 0.8

type VerticalButtonsAlertStyles = {
  fullScreenContainer: ViewStyle
  popUpContainer: ViewStyle
  messageContainer: ViewStyle
  titleText: ViewStyle
  descriptionText: ViewStyle
  buttonsContainer: ViewStyle
  linkButtonContainer: ViewStyle
  button: ViewStyle
}

export default StyleSheet.create<VerticalButtonsAlertStyles>({
  fullScreenContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  popUpContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: cardWidth,
    backgroundColor: PrimaryColors.White,
    borderRadius: 8,
  },
  messageContainer: {
    flexDirection: 'column',
    width: cardWidth,
    marginVertical: mediumSpace,
    paddingHorizontal: largeSpace,
  },
  titleText: {
    color: PrimaryColors.Black,
    ...h2Headline,
    marginBottom: mediumSpace,
  },
  descriptionText: {
    color: PrimaryColors.Black,
    ...bodyRegular,
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    width: '100%',
  },
  linkButtonContainer: {
    width: '100%',
    backgroundColor: 'transparent',
    borderTopWidth: 0.5,
    borderTopColor: PrimaryColors.Black,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: mediumSpace,
    marginVertical: 0,
    justifyContent: 'center',
  },
})
