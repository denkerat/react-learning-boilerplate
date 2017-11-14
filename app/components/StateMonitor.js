import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import ReactJson from 'react-json-view'

class StateMonitor extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {className, state} = this.props

    return (
      <div className={classNames('p-2 h-100 d-flex flex-column', className)}>
        <h4>State Monitor</h4>
        <div className="overflow-container h-100">
          <ReactJson src={state}/>
        </div>
      </div>
    )
  }
}

export default connect(state => ({state}))(StateMonitor)
