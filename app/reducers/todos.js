const uuid = require('uuid/v4')
const initialState = []

export default function todos (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          message: action.todo
        }
      ]
    case 'REMOVE_TODO':
      return state.filter(todos => todos.id !== action.id)
    default:
      return state
  }
}
