import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withFormsy, propTypes } from 'formsy-react'
import classNames from 'classnames'

function Tooltip ({children}) {
  return (
    <div className="tooltip bs-tooltip-right bs-tooltip-top-docs bs-tooltip-static" role="tooltip">
      <div className="arrow"/>
      <div className="tooltip-inner">
        {children}
      </div>
    </div>
  )
}

class Input extends Component {
  constructor (props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
    this.state = {
      touched: false
    }
  }

  changeValue (event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    this.props.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value'])
  }

  render () {
    const {
      type, name, getValue, className,
      pushed, autofocus
    } = this.props

    let innerProps = {}
    if (autofocus) {
      innerProps.autoFocus = true
    }

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    const errorMessage = this.props.getErrorMessage()

    return (
      <div ref={name} className={classNames('form-group position-relative', className)}>
        <input
          className={classNames('form-control', {
            ['is-invalid']: (this.props.showRequired() || this.props.showError()) && pushed
          })}
          type={type || 'text'}
          name={name}
          onChange={this.changeValue}
          value={getValue() || ''}
          placeholder={this.props.title}
          {...innerProps}
        />
        {pushed && errorMessage && <Tooltip>{pushed && errorMessage}</Tooltip>}
      </div>
    )
  }
}

Input
  .propTypes = {
  ...propTypes,
  pushed: PropTypes.bool,
  error: PropTypes.object
}

export
default

withFormsy(Input)
