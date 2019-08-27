import React, { Component } from 'react';
import TodoList from './TodoList';

class Todo extends Component {
    render() {
        return (
            <div className='todo-container task-container'>
                <h3>To do</h3>
                <TodoList todoList={this.props.todoList}/>
            </div>
        )
    }
}

export default Todo;
