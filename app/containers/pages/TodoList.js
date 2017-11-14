import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { todo } from '../../actions'
import { connect } from 'react-redux'

class Home extends Component {
  constructor (props) {
    super(props)
    this.actions = bindActionCreators(todo, this.props.dispatch)

    this.state = {
      todoName: ''
    }
  }

  render () {
    const {title, todos} = this.props
    const {todoName} = this.state

    return (
      <div>
        <h1>{title}</h1>
        <div className="p-2 input-group d-flex">
          <input type="text"
                 className="form-control"
                 onChange={event => this.setState({todoName: event.target.value})}
                 value={this.state.todoName}/>
          <button className="btn btn-light"
                  onClick={() => {
                    this.actions.addTodo(todoName)
                    this.setState({todoName: ''})
                  }}
                  disabled={this.state.todoName === ''}>Add todo
          </button>
        </div>
        <ul className="p-2 list-group">
          {todos ? todos.map((todo, i) => (
            <li key={i} className="list-group-item d-flex justify-content-between">
              {todo.message}
              <button className="btn"
                      onClick={() => this.actions.removeTodo(todo.id)}>
                <i className="fa fa-remove"/>
              </button>
            </li>
          )) : <li className="list-group-item">Empty</li>}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(Home)
