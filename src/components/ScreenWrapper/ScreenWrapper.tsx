import React from 'react'
import { ScrollView, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native'
import { ScreenWrapperProps } from './ScreenWrapper.types'

import styles from './ScreenWrapper.styles'

export const ScreenWrapper = ({ children }: ScreenWrapperProps) => (
  <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.flex}>
      <ScrollView style={styles.flex}>{children}</ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
)
