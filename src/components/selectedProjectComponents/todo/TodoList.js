import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.todoList.map( item => 
                    <TodoItem key={'todo'+item.taskid} title={item.task_title} taskid={item.taskid} toggleSelected={this.props.toggleSelected}/>)}
            </div>
        )
    }
}

export default TodoList;
