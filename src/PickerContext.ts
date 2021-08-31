import * as React from 'react'
import { search } from './service'

export type PickerContextParam = {
  search: typeof search
}

export const DEFAULT_CONTEXT = {
  search,
}

export const PickerContext = React.createContext<PickerContextParam>(
  DEFAULT_CONTEXT,
)

export const useContext = () => React.useContext(PickerContext)

export const {
  Provider: PickerProvider,
  Consumer: PickerConsumer,
} = PickerContext
