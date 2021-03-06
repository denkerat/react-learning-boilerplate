/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import todos from './todos'

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function () {
  return combineReducers({
    routing: routerReducer,
    todos,
  })
}

