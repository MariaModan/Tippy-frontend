import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.todoList.map( item => 
                    <TodoItem 
                        key={'todo'+item.taskid} 
                        title={item.task_title} 
                        taskid={item.taskid} 
                        toggleSelected={this.props.toggleSelected}
                        delTask={this.delTask}/>)}
            </div>
        )
    }
}

TodoList.propTypes = {
    todoList: PropTypes.array,
    toggleSelected: PropTypes.func,
}

export default TodoList;
