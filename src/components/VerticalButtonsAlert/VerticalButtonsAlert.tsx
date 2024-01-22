import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

import styles from './VerticalButtonsAlert.styles'
import { VerticalButtonsAlertProps } from './VerticalButtonsAlert.types'
import Button from '../Button'
import { PrimaryColors } from '../../styles/Colors'

export const VerticalButtonsAlert = ({
  buttons,
  title,
  description = '',
  isLoading = false,
}: VerticalButtonsAlertProps) => (
  <View style={styles.fullScreenContainer}>
    <View style={styles.popUpContainer}>
      <View style={styles.messageContainer}>
        {title.length > 0 && <Text style={styles.titleText}>{title}</Text>}
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      {!isLoading && (
        <View style={styles.buttonsContainer}>
          {buttons.map((button) => (
            <View style={styles.linkButtonContainer} key={button.buttonId}>
              <Button onPress={button.buttonAction} label={button.buttonText} containerStyles={styles.button} />
            </View>
          ))}
        </View>
      )}
      {!!isLoading && (
        <View style={styles.buttonsContainer}>
          <View style={styles.linkButtonContainer}>
            <ActivityIndicator style={styles.button} color={PrimaryColors.CTA} size="small" />
          </View>
        </View>
      )}
    </View>
  </View>
)
