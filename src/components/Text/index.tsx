import React from 'react'
import { StyleProp, TextStyle, Text as RNText, TextProps, StyleSheet } from 'react-native'
import { s } from 'react-native-size-matters'
import { Colors } from '../../constants'

const styles = StyleSheet.create({
  h1Style: {
    fontSize: s(17),
    lineHeight: s(22),
    fontFamily: 'Inter-Medium'
  },
  h2Style: {
    fontSize: s(16),
    lineHeight: s(18),
    fontFamily: 'Inter-Medium'
  },
  h3Style: {
    fontSize: s(14),
    lineHeight: s(18),
    fontFamily: 'Inter-Medium'
  },
  h4Style: {
    fontSize: s(13),
    lineHeight: s(17),
    fontFamily: 'Inter-Regular'
  },
  generalStyle: {
    color: Colors.text
  },
  crossedStyle: {
    textDecorationLine: 'line-through',
    color: Colors.crossedText
  }
})

export type FontType = {
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
}

export interface TextT extends TextProps, FontType {
  title?: string
  color?: string
  textStyle?: StyleProp<TextStyle>
  centerText?: boolean
  fontSize?: number
  isCrossed?: boolean
}

export const Text = ({
  h1,
  h2,
  h3,
  h4,
  // no H
  title,
  color,
  textStyle,
  centerText,
  fontSize,
  isCrossed,
  ...otherProp
}: TextT) => {
  return (
    <RNText
      style={[
        h1 && h1Style,
        h2 && h2Style,
        h3 && h3Style,
        h4 && h4Style,
        generalStyle,
        isCrossed && crossedStyle,
        centerText && { textAlign: 'center' },
        color ? { color } : {},
        fontSize ? { fontSize } : {},
        textStyle
      ]}
      {...otherProp}
    >
      {title ? title : ' '}
    </RNText>
  )
}

const { h1Style, h2Style, h3Style, h4Style, generalStyle, crossedStyle } = styles
