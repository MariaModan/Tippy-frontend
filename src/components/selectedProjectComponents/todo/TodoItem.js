import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        return (
            <div className='task'>
                <label><input type='checkbox' onClick={this.props.toggleSelected.bind(this, this.props.taskid)}/>{this.props.title} </label>

            </div>
        )
    }
}

export default TodoItem;