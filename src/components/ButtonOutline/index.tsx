import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { s } from 'react-native-size-matters'
import { Colors } from '../../constants'
import { Text } from '../Text'

export const ButtonOutline = ({ title, onPress }: ButtonOutlineT) => {
  return (
    <View style={view}>
      <TouchableOpacity onPress={onPress} style={container}>
        <Text color={Colors.primaryButtons} h3 title={title} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: s(9),
    borderColor: Colors.primaryButtons,
    borderWidth: s(2),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: s(7)
  },
  view: {
    paddingHorizontal: s(17)
  }
})

const { container, view } = styles

interface ButtonOutlineT {
  onPress?: () => void
  title: string
}
