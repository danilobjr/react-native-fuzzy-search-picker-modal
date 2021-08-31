import React, { ReactNode } from 'react'
import { TextProps, Text } from 'react-native'
import { useTheme } from './Theme'

export const ItemText = (props: TextProps & { children: ReactNode }) => {
  const { fontFamily, fontSize, onBackgroundTextColor } = useTheme()
  return (
    <Text
      {...props}
      style={{ fontFamily, fontSize, color: onBackgroundTextColor }}
    />
  )
}
