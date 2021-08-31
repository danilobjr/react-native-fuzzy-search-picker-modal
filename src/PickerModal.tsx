import * as React from 'react'
import { ModalProps, SafeAreaView, StyleSheet } from 'react-native'
import { AnimatedModal } from './AnimatedModal'
import { Modal } from './Modal'
import { useTheme } from './Theme'
import { ModalContext } from './ModalProvider'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export const PickerModal = ({
  children,
  disableNativeModal,
  ...props
}: ModalProps & {
  children: React.ReactNode
  disableNativeModal?: boolean
}) => {
  const { backgroundColor } = useTheme()
  const { teleport } = React.useContext(ModalContext)

  const content = (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      {children}
    </SafeAreaView>
  )

  React.useEffect(() => {
    if (disableNativeModal) {
      teleport!(<AnimatedModal {...props}>{content}</AnimatedModal>)
    }
  }, [disableNativeModal])

  return <Modal {...props}>{content}</Modal>
}

PickerModal.defaultProps = {
  animationType: 'slide',
  animated: true,
  disableNativeModal: false,
}
