import React, { useState, useEffect, FC } from 'react'
import {
  ModalProps,
  FlatListProps,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native'
import { PickerModal } from './PickerModal'
import { HeaderModal } from './HeaderModal'
import { Item } from './types'
import { InputSearch, InputSearchProps } from './InputSearch'
import { PickerList } from './PickerList'

type State = {
  visible: boolean
  filter?: string
}

type PickerProps = {
  allowFontScaling?: boolean
  closeButtonImage?: ImageSourcePropType
  closeButtonStyle?: StyleProp<ViewStyle>
  closeButtonImageStyle?: StyleProp<ImageStyle>
  disableNativeModal?: boolean
  filterProps?: InputSearchProps
  flatListProps?: FlatListProps<Item>
  items: Item[]
  modalProps?: ModalProps
  visible?: boolean
  withCloseButton?: boolean
  onSelect(item: Item): void
  onOpen?(): void
  onClose?(): void
}

export const Picker: FC<PickerProps> = props => {
  const {
    closeButtonImage,
    closeButtonImageStyle,
    closeButtonStyle,
    disableNativeModal,
    filterProps,
    flatListProps,
    items,
    modalProps,
    withCloseButton,
    onClose: handleClose,
    onOpen: handleOpen,
    onSelect,
  } = props
  const [state, setState] = useState<State>({
    visible: props.visible || false,
    filter: '',
  })
  const { visible, filter } = state

  useEffect(() => {
    if (state.visible !== props.visible) {
      setState({ ...state, visible: props.visible || false })
    }
  }, [props.visible])

  const onOpen = () => {
    setState({ ...state, visible: true })
    if (handleOpen) {
      handleOpen()
    }
  }

  const onClose = () => {
    setState({ ...state, filter: '', visible: false })
    if (handleClose) {
      handleClose()
    }
  }

  const setFilter = (filter: string) => setState({ ...state, filter })

  const onSelectClose = (item: Item) => {
    onSelect(item)
    onClose()
  }

  return (
    <PickerModal
      visible={visible}
      disableNativeModal={disableNativeModal}
      onDismiss={onClose}
      onShow={onOpen}
      onRequestClose={onClose}
      {...modalProps}
    >
      <HeaderModal
        onClose={onClose}
        closeButtonImage={closeButtonImage}
        closeButtonImageStyle={closeButtonImageStyle}
        closeButtonStyle={closeButtonStyle}
        withCloseButton={withCloseButton}
      >
        <InputSearch value={filter} onChangeText={setFilter} {...filterProps} />
      </HeaderModal>

      <PickerList
        data={items}
        filter={filter}
        flatListProps={flatListProps}
        onSelect={onSelectClose}
      />
    </PickerModal>
  )
}
