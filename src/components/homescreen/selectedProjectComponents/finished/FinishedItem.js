import React from 'react';
import PropTypes from 'prop-types';

const FinishedItem = ({taskid, title, delTask }) => {
    return (
        <div className='task-container'>
            <label className='task'>
                <input type='checkbox'></input>
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

FinishedItem.propTypes = {
    title: PropTypes.string,
    taskid: PropTypes.number,
    delTask: PropTypes.func
}

export default  FinishedItem;
