import React, { Component } from "react"
import Navigation from '../components/Navigation'
import StateMonitor from '../components/StateMonitor'
import pages from '../pages.json'

import 'sanitize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import '../assets/styles/font-awesome.min.css'
import '../components/ui/styles/ui.scss'
import '../assets/styles/styles.scss'

function Main ({children}) {
  return [
    <Navigation key={0} items={pages}/>,
    <div key={1} className="d-flex flex-auto h-100">
      <div className="container flex-3 overflow-container h-100">
        {children}
      </div>
      <div className="flex-1">
        <StateMonitor className="overflow-container h-100"/>
      </div>
    </div>
  ]
}

export default Main
