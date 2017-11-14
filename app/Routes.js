import React from "react"
import Main from './containers/Main'
import * as templates from './containers/pages'
import Helmet from 'react-helmet'
import pages from './pages.json'

export default pages.map(({path, exact, title, component, props}) => ({
  path, exact, main: () => (
    <Main>
      <Helmet>
        <title>React learn - {title}</title>
      </Helmet>
      {React.createElement(templates[component], {
        ...props,
        title
      })}
    </Main>
)}))
