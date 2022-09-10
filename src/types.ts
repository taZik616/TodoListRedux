export interface todoFormType {
  title: string
  content: string
}

export interface todosType extends todoFormType {
  id: string
  isCompleted?: boolean
}
