import React, { useMemo, useState } from 'react'
import { Text, StyleSheet, PixelRatio, Button, ScrollView } from 'react-native'
import { countries } from './data/countries'
import { PickerModal, Item, ModalProvider } from './src'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 17,
    textAlign: 'center',
    margin: 5,
  },
  instructions: {
    fontSize: 10,
    textAlign: 'center',
    color: '#888',
    marginBottom: 0,
  },
  data: {
    maxWidth: 250,
    padding: 10,
    marginTop: 7,
    backgroundColor: '#ddd',
    borderColor: '#888',
    borderWidth: 1 / PixelRatio.get(),
    color: '#777',
  },
})

export default function App() {
  const [selectedItem, setSelectedItem] = useState<Item>(null)
  const [visible, setVisible] = useState<boolean>(false)
  const switchVisible = () => setVisible(!visible)

  const items = useMemo(() => {
    return countries.map(
      country =>
        ({
          label: country.name,
          value: country._id,
        } as Item),
    )
  }, [countries])

  return (
    <ModalProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.welcome}>Welcome to List Picker!</Text>

        <PickerModal
          items={items}
          modalProps={{ visible }}
          filterProps={{ placeholder: 'Selecione o item' }}
          onClose={() => setVisible(false)}
          onOpen={() => setVisible(true)}
          onSelect={setSelectedItem}
        />

        <Button
          title={'Open modal from outside using visible props'}
          onPress={switchVisible}
        />

        {selectedItem !== null && (
          <Text style={styles.data}>
            {JSON.stringify(selectedItem, null, 0)}
          </Text>
        )}
      </ScrollView>
    </ModalProvider>
  )
}
