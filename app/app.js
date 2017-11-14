/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import 'babel-polyfill'
import React from 'react'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { render } from 'react-dom'
import createHistory from 'history/createBrowserHistory'

import configureStore from "./configureStore"
// import 'file-loader?name=[name].[ext]!./favicon.ico'
import Root from './Root'

const initialState = {}
const store = configureStore(initialState)
const history = createHistory()
syncHistoryWithStore(history, store)

function renderApp () {
  const App = () => (
    <Provider store={store}>
      <Root history={history}/>
    </Provider>
  )

  if (typeof window !== 'undefined') {
    render(<App/>, document.getElementById('root'))
  }

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
  if (process.env.NODE_ENV === 'production') {
    require('offline-plugin/runtime').install() // eslint-disable-line global-require
  }
}

if (module.hot) {
  module.hot.accept()
}

renderApp()
