import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        return (
            <div>

                <label><input type='checkbox' onClick={this.props.toggleSelected.bind(this, this.props.taskid)}/>{this.props.title} </label>

            </div>
        )
    }
}

export default TodoItem;