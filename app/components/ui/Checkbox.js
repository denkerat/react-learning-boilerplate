import React, { Component } from 'react'
import { propTypes, withFormsy } from 'formsy-react'
import classNames from 'classnames'

class Checkbox extends Component {
  constructor (props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
    this.state = {
      value: true,
    }
  }

  changeValue (event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    this.props.setValue(event.target.checked)
  }

  render () {
    const {name, children, getValue, className} = this.props
    const value = getValue()
    return (
      <div className={classNames(className, 'form-check', {
        required: this.props.showRequired(),
        error: this.props.showError()
      })}>
        <label
          className="custom-control custom-checkbox mb-2 form-check-label"
          htmlFor={name}>
          <input
            className="custom-control-input"
            onChange={this.changeValue}
            id={name}
            type='checkbox'
            checked={value || false}
            data-checked={value || false}
          />
          <span className="custom-control-indicator"/>
          {children}
        </label>
      </div>
    )
  }
}

Checkbox.propTypes = {
  ...propTypes,
}

export default withFormsy(Checkbox)
