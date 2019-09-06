import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        return (
            <div>
                <input type='checkbox' onClick={this.props.addToSelectedTasks.bind(this, this.props.taskid, this.props.title)}></input>{this.props.title}
            </div>
        )
    }
}

export default TodoItem;