export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export function addTodo (todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

export function removeTodo (id) {
  return {
    type: REMOVE_TODO,
    id
  }
}
