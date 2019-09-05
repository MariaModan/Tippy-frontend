import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.todoList.map( item => 
                    <TodoItem key={'todo'+item.taskId} title={item.taskTitle} />)}
            </div>
        )
    }
}

export default TodoList;
