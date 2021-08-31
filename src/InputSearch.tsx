import React, { FC } from 'react'
import { TextInput, StyleSheet, TextInputProps, Platform } from 'react-native'
import { useTheme } from './Theme'

const verticalHackyAlign = 4

const styles = StyleSheet.create({
  input: {
    paddingTop: verticalHackyAlign,
    ...Platform.select({
      web: {
        outlineWidth: 0,
        outlineColor: 'transparent',
        outlineOffset: 0,
      },
    }),
  },
})

export type InputSearchProps = TextInputProps

export const InputSearch: FC<InputSearchProps> = props => {
  const {
    filterPlaceholderTextColor,
    fontFamily,
    fontSize,
    onBackgroundTextColor,
  } = useTheme()

  return (
    <TextInput
      testID='text-input-search'
      autoCorrect={false}
      placeholderTextColor={filterPlaceholderTextColor}
      style={[
        styles.input,
        {
          fontFamily,
          fontSize,
          color: onBackgroundTextColor,
        },
      ]}
      {...props}
    />
  )
}

InputSearch.defaultProps = {
  autoFocus: false,
  placeholder: 'Search',
}
