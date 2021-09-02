import React, { useRef, memo, FC } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  PixelRatio,
  FlatListProps,
  Dimensions,
} from 'react-native'
import { useTheme } from './Theme'
import { useContext } from './PickerContext'
import { ItemText } from './ItemText'
import { Item } from './types'

const borderBottomWidth = 2 / PixelRatio.get()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  itemLabel: {
    width: '90%',
  },
  separator: {
    borderBottomWidth,
    width: '100%',
  },
})

type ListItemProps = {
  item: Item
  onSelect: (item: Item) => void
}

const ListItem: FC<ListItemProps> = props => {
  const { activeOpacity, itemHeight } = useTheme()
  const { item, onSelect } = props

  return (
    <TouchableOpacity
      key={item.value}
      testID={`item-selector-${item.value}`}
      onPress={() => onSelect(item)}
      {...{ activeOpacity }}
    >
      <View style={[styles.item, { height: itemHeight }]}>
        <View style={styles.itemLabel}>
          <ItemText numberOfLines={2} ellipsizeMode='tail'>
            {item.label}
          </ItemText>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const MemoListItem = memo<ListItemProps>(ListItem)

type ListProps = {
  data: Item[]
  filter?: string
  flatListProps?: FlatListProps<Item>
  onSelect: (item: Item) => void
}

const keyExtractor = (item: Item) => item.value

const ItemSeparatorComponent = () => {
  const { primaryColorVariant } = useTheme()
  return (
    <View
      style={[styles.separator, { borderBottomColor: primaryColorVariant }]}
    />
  )
}

const { height } = Dimensions.get('window')

export const PickerList: FC<ListProps> = props => {
  const { data, filter, flatListProps, onSelect } = props

  const flatListRef = useRef<FlatList<Item>>(null)
  const { itemHeight, backgroundColor } = useTheme()
  const { search } = useContext()

  const initialNumToRender = Math.round(height / (itemHeight || 1))

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <FlatList
        ref={flatListRef}
        testID='list-items'
        automaticallyAdjustContentInsets={false}
        keyboardShouldPersistTaps='handled'
        scrollEventThrottle={1}
        getItemLayout={(_data: any, index) => ({
          length: itemHeight! + borderBottomWidth,
          offset: (itemHeight! + borderBottomWidth) * index,
          index,
        })}
        renderItem={({ item }) => (
          <MemoListItem item={item as Item} onSelect={onSelect} />
        )}
        data={search(filter, data)}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeparatorComponent}
        initialNumToRender={initialNumToRender}
        {...flatListProps}
      />
    </View>
  )
}
