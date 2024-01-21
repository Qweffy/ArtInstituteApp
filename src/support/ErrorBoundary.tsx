import React, { ErrorInfo, ReactNode } from 'react'
import { View, Text, Button } from 'react-native'

interface ErrorBoundaryState {
  hasError: boolean
}

interface ErrorBoundaryProps {
  children: ReactNode
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo)
    // Aquí puedes manejar el error, como enviarlo a un servicio de reporte de errores.
  }

  render() {
    const { hasError } = this.state // Desestructuración del estado

    if (hasError) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Algo salió mal.</Text>
          <Button title="Reintentar" onPress={() => this.setState({ hasError: false })} />
        </View>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
