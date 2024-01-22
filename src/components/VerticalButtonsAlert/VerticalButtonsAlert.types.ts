import { ReactNode } from 'react'

type ButtonsType = {
  buttonId: number
  buttonAction: () => void
  buttonText: string
}

export type VerticalButtonsAlertInputProps = {
  isLoading?: boolean
}

export type VerticalButtonsAlertFunctionProps = {
  buttons: Array<ButtonsType>
}

export type VerticalButtonsAlertOwnProps = {
  title: string
  description?: string | ReactNode
}

export type VerticalButtonsAlertProps = VerticalButtonsAlertInputProps &
  VerticalButtonsAlertFunctionProps &
  VerticalButtonsAlertOwnProps
