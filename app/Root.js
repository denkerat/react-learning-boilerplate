import React from "react"
import { Router, Route } from "react-router-dom"
import routes from "./Routes"

function Root ({history}) {
  return (
    <Router history={history}>
      <div className="h-100 d-flex flex-column">
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}/>
        ))}
      </div>
    </Router>
  )
}

export default Root
