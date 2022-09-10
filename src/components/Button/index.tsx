import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { s } from 'react-native-size-matters'
import { Colors } from '../../constants'
import { Text } from '../Text'

export const Button = ({ title, onPress }: ButtonT) => {
  return (
    <TouchableOpacity onPress={onPress} style={contaier}>
      <Text color={Colors.background} h2 title={title} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  contaier: {
    borderRadius: s(9),
    backgroundColor: Colors.primaryButtons,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: s(15)
  }
})

const { contaier } = styles

interface ButtonT {
  onPress?: () => void
  title: string
}
