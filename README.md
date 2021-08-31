# react-native-fuzzy-search-picker-modal

Picker Modal with fuzzy search input for React Native.

## Before you proceed

This is based on work of [Xavier Carpentier](https://xaviercarpentier.com/) and its [react-native-country-picker-modal](https://github.com/xcarpentier/react-native-country-picker-modal). I just take the modal picker part and make it generic for any kind of data.

Bellow is the original demo video of [react-native-country-picker-modal](https://github.com/xcarpentier/react-native-country-picker-modal). **Be ware that not all props exists** and this version has an `items` required prop. See [Props](https://github.com/danilobjr/react-native-fuzzy-search-picker-modal/blob/master/README.md#props) section for more details

| iOS                                                                                               | Android                                                                                           | Web                                                                                               |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| <img  src="https://media.giphy.com/media/cKmlP4Ue5pUrH0DQLi/giphy.gif" width="200" height="400"/> | <img  src="https://media.giphy.com/media/Q7SDti4eARGx2CQIGE/giphy.gif" width="200" height="400"/> | <img  src="https://media.giphy.com/media/gKl3z3c7sVVL7KSSh8/giphy.gif" width="250" height="400"/> |

<!-- ## Demo -->

<!-- - 🎉[ GO TO WEB DEMO ](http://xcarpentier.github.io/react-native-country-picker-modal/) 🎉
- [snack example](https://snack.expo.io/@xcarpentier/bossy-marshmallows) -->

## Installation

```bash
$ yarn add react-native-fuzzy-search-picker-modal
```

## Basic Usage

For more complete example open [App.tsx](https://github.com/danilobjr/react-native-fuzzy-search-picker-modal/blob/master/App.tsx)

```tsx
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { PickerModal, Item } from 'react-native-fuzzy-search-picker-modal'

const styles = StyleSheet.create({
  // ...
})

export default function App() {
  const [selectedItem, setSelectedItem] = useState<Item>(null)
  const [visible, setVisible] = useState<boolean>(false)

  const switchVisible = () => setVisible(!visible)

  return (
    <View style={styles.container}>
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
        <Text style={styles.data}>{JSON.stringify(selectedItem, null, 0)}</Text>
      )}
    </View>
  )
}
```

## Props

- `filterProps?`: [CountryFilterProps](https://facebook.github.io/react-native/docs/textinput#props)
- `flatListProps?`: [FlatListProps<Item>](https://facebook.github.io/react-native/docs/flatlist#props)
- `modalProps?`: [ModalProps](https://facebook.github.io/react-native/docs/modal#props)
- `items`: [Item](https://github.com/danilobjr/react-native-fuzzy-search-picker-modal/blob/master/src/types.ts)[]
- `visible?`: boolean
- `withCloseButton?`: boolean
- `onClose`: () => void
- `onOpen`: () => void
- `onSelect`: (item: [Item](https://github.com/danilobjr/react-native-fuzzy-search-picker-modal/blob/master/src/types.ts)) => void
- `closeButtonStyle?`: StyleProp<ViewStyle>
- `closeButtonImageStyle?`: StyleProp<ImageStyle>
- `disableNativeModal?`: boolean (you have to wrap your all app with ModalProvider)

## FAQ

### Is it supported and tested both on android and iOS?

YES

## Contribution

[@danilobjr](mailto:danilobjr@gmail.com) - Main author

## Questions

Feel free to [create an issue](https://github.com/danilobjr/react-native-fuzzy-search-modal-picker/issues/new)

## Licence

[MIT](https://danilobjr.mit-license.org/) © Made with <strike>love</strike> _a keyboard_ by [Danilo Barros](https://danilobjr.mit-license.org/)
