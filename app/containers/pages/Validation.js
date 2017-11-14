import React, { Component } from 'react'
import Formsy from 'formsy-react'
import {
  Input, Checkbox
} from '../../components/ui'

class Validation extends Component {

  constructor (props) {
    super(props)
    this.disableButton = this.disableButton.bind(this)
    this.enableButton = this.enableButton.bind(this)
    this.submit = this.submit.bind(this)
    this.state = {
      valid: false,
      pushed: false
    }
  }

  disableButton () {
    this.setState({valid: false})
  }

  enableButton () {
    this.setState({valid: true})
  }

  submit (model) {
    this.setState({pushed: true})
    const {valid} = this.state
    if (valid) {
      alert(JSON.stringify(model, null, 4))
    }
  }

  render () {
    const {title} = this.props
    const {pushed} = this.state

    return (
      <div>
        <h1>{title}</h1>
        <Formsy className="form-signin mx-auto"
                onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
          <h4 className="form-signin-heading">Sign in</h4>
          <Input autofocus
                 name="email"
                 pushed={pushed}
                 title="Email Address"
                 validations="isEmail"
                 validationError="This is not a valid email"
                 required/>
          <Input name="password"
                 pushed={pushed}
                 title="Password"
                 type="password"
                 required/>
          <Checkbox name="remember">Remember me</Checkbox>
          <button className="btn btn-primary" type="submit">
            Sign in
          </button>
        </Formsy>
      </div>
    )
  }
}

export default Validation
