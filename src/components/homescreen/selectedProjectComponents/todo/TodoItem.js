import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({toggleSelected, taskid, title, delTask }) => {
    return (
        <div className='task-container'>
            <label className='task'>
                <input type='checkbox' 
                    onClick={toggleSelected.bind(this, taskid)}/>
                    {title}
            </label>
            <button 
                className='del-task'
                onClick={delTask.bind(this, taskid)}>
                    X
            </button>
        </div>
    )
}

TodoItem.propTypes = {
    toggleSelected: PropTypes.func,
    delTask: PropTypes.func,
    taskid: PropTypes.number,
    title: PropTypes.string
}

export default TodoItem;