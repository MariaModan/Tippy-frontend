import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const TodoList = ({todoList, toggleSelected, delTask}) => {
    return (
        <div>
            {todoList.map( item => 
                <TodoItem 
                    key={'todo'+item.taskid} 
                    title={item.task_title} 
                    taskid={item.taskid} 
                    toggleSelected={toggleSelected}
                    delTask={delTask}/>)}
        </div>
    )
}

TodoList.propTypes = {
    todoList: PropTypes.array,
    toggleSelected: PropTypes.func,
    delTask: PropTypes.func
}

export default TodoList;
