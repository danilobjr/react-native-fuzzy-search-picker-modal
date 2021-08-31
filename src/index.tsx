import React from 'react'
import { Item } from './types'
import { PickerProvider, DEFAULT_CONTEXT } from './PickerContext'
import { ThemeProvider, DEFAULT_THEME, Theme } from './Theme'
import { InputSearchProps } from './InputSearch'
import { ModalProps, FlatListProps } from 'react-native'
import { Picker } from './Picker'

interface Props {
  disableNativeModal?: boolean
  filterProps?: InputSearchProps
  flatListProps?: FlatListProps<Item>
  items: Item[]
  modalProps?: ModalProps
  theme?: Theme
  visible?: boolean
  withCloseButton?: boolean
  onClose?: () => void
  onOpen?: () => void
  onSelect: (item: Item) => void
}

const Main = ({ theme, ...props }: Props) => {
  return (
    <ThemeProvider theme={{ ...DEFAULT_THEME, ...theme }}>
      <PickerProvider value={DEFAULT_CONTEXT}>
        <Picker {...props} />
      </PickerProvider>
    </ThemeProvider>
  )
}

Main.defaultProps = {
  onSelect: () => {},
}

export { Main as PickerModal }
export { ModalProvider } from './ModalProvider'
export * from './types'
