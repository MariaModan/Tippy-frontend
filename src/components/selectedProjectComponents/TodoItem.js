import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        return (
            <div>
                <input type='checkbox'></input>{this.props.title}
            </div>
        )
    }
}

export default TodoItem;