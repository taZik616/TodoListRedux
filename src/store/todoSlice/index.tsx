// Напиши функции-селекторы здесь
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { todoFormType, todosType } from '../../types'

const initialState: initialT = {
  listOfTodos: [
    {
      title: 'Математика',
      content: 'Стр. 4, упр. 36 а, б',
      id: '1'
    },
    {
      title: 'Русский язык',
      content: 'Учебник, стр 4, упр. 36 а, б.',
      id: '2'
    },
    {
      title: 'ИЗО',
      content:
        'Подготовить клей, ножницы, вл. салфетки, цветную бумагу, ножницы, шерстняые нитки',
      id: '3'
    },
    {
      title: 'Литература',
      content: 'Учебник, стр. 4-40 пересказ',
      id: '4'
    }
  ]
}

type idPayload = PayloadAction<string>

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createNewTodo: (state, action: PayloadAction<todoFormType>) => {
      const { title, content } = action.payload
      state.listOfTodos.push({ title, content, id: nanoid() })
    },
    removeTodo: (state, action: idPayload) => {
      const todoId = action.payload
      state.listOfTodos = state.listOfTodos.filter(a => a.id !== todoId)
    },
    toggleIsCompleted: (state, action: idPayload) => {
      const todoId = action.payload
      const todoForUpdateId = state.listOfTodos.findIndex(a => a.id === todoId)

      const prevIsCompleted = state.listOfTodos[todoForUpdateId].isCompleted
      state.listOfTodos[todoForUpdateId].isCompleted = !prevIsCompleted
    }
  }
})

export const { createNewTodo, removeTodo, toggleIsCompleted } = todosSlice.actions

export const todosSelector = (st: RootState) => st.todos
export const todosReducer = todosSlice.reducer

interface initialT {
  listOfTodos: todosType[]
}
