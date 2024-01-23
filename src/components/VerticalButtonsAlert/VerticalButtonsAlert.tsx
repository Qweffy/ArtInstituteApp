import React from 'react'
import { ActivityIndicator, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'

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
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FCB82F',
    }}>
    <Image
      source={require('../../assets/404.png')}
      style={{
        width: Dimensions.get('screen').width - 80,
        height: 320,
      }}
      resizeMode="contain"
    />
    <Text
      style={{
        color: '#000',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
      }}>
      {`Oops! You weren't\nsupposed to see this.`}
    </Text>
    <Text
      style={{
        color: '#000',
        fontWeight: '600',
        fontSize: 12,
        marginVertical: 10,
      }}>
      The page you were looking was loading incorrectly.
    </Text>
    <TouchableOpacity
      onPress={() => {}}
      style={{
        backgroundColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        borderRadius: 5,
      }}>
      <Text
        style={{
          color: '#FFF',
          fontWeight: '600',
          fontSize: 14,
        }}>
        GO BACK
      </Text>
    </TouchableOpacity>
  </View>
)
