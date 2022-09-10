import React, { memo } from 'react'
import { StyleSheet, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import { todosType } from '../../types'
import { Text } from '../Text'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../constants'
import { useTypedDispatch } from '../../store'
import { removeTodo, toggleIsCompleted } from '../../store/todoSlice'
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

export const ListItem = memo(({ isCompleted, title, content, id }: ListItemT) => {
  const dispatch = useTypedDispatch()
  const translateX = useSharedValue(0)
  const { width } = useWindowDimensions()

  const handlePressCheck = () => {
    dispatch(toggleIsCompleted(id))
  }

  const delItemOnEnd = () => {
    dispatch(removeTodo(id))
  }

  const handlePressDelete = () => {
    translateX.value = withTiming(-width, { duration: 500 }, () => {
      'worklet'
      console.log('🚀 - worklet')
      runOnJS(delItemOnEnd)()
    })
  }

  const animStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }]
  }))

  return (
    <Animated.View style={[container, animStyle]}>
      <TouchableOpacity
        onPress={handlePressCheck}
        style={[checkboxContainer, isCompleted && activeCheckbox]}
      >
        <Icon
          name="checkmark"
          size={s(28)}
          color={isCompleted ? Colors.background : '#3b3b3b5e'}
        />
      </TouchableOpacity>
      <View style={contentContainer}>
        <Text h1 title={title} />
        <Text h4 title={content} numberOfLines={4} isCrossed={isCompleted} />
      </View>
      <TouchableOpacity onPress={handlePressDelete} style={removeContainer}>
        <Icon name="md-trash-outline" size={s(28)} color={Colors.crossedText} />
      </TouchableOpacity>
    </Animated.View>
  )
})

interface ListItemT extends todosType {}

const styles = StyleSheet.create({
  container: {
    paddingVertical: vs(10),
    borderBottomWidth: s(1),
    borderBottomColor: '#EEF8FD',
    flexDirection: 'row',
    alignItems: 'center'
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: s(20)
  },
  checkboxContainer: {
    height: s(36),
    width: s(36),
    borderRadius: s(10),
    borderWidth: s(1.5),
    borderColor: '#292D32',
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeCheckbox: {
    backgroundColor: '#469D3E',
    borderWidth: 0
  },
  removeContainer: {
    height: s(36),
    width: s(36),
    borderRadius: s(10),
    backgroundColor: '#F8F8F8'
  }
})

const {
  container,
  checkboxContainer,
  removeContainer,
  contentContainer,
  activeCheckbox
} = styles
