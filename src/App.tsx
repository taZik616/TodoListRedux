import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { s, vs } from 'react-native-size-matters'
import { Button, ButtonOutline, ListItem } from './components'
import { Space } from './components/Space'
import { Colors } from './constants'
import { useTypedSelector } from './store'
import { todosSelector } from './store/todoSlice'

const App = () => {
  const { top: paddingTop, bottom } = useSafeAreaInsets()
  // так лучше передавать колбек в селектор чтобы не обновлять ссылку
  const { listOfTodos } = useTypedSelector(todosSelector)
  const openCreateNewTodoPopup = () => {}
  return (
    <View style={[rootContainer, { paddingTop }]}>
      <Space height={vs(38)} />
      <ButtonOutline title="Показывать все задания" />
      <Space height={vs(38)} />
      <View style={line} />
      <FlatList
        data={listOfTodos}
        style={listContainer}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ListItem {...item} />}
        ListFooterComponent={() => (
          <>
            <Space height={vs(25)} />
            <Button onPress={openCreateNewTodoPopup} title="Добавить" />
          </>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.background
  },
  line: {
    width: '100%',
    backgroundColor: Colors.separatorLine,
    height: s(1)
  },
  listContainer: {
    paddingHorizontal: s(17)
  }
})

const { rootContainer, line, listContainer } = styles

export default App
