import React from 'react';
import InProgressItem from './InProgressItem';
import PropTypes from 'prop-types';

const InProgressList = ({inProgressList, toggleSelected, delTask}) => {
    return (
        <div>
            {inProgressList.map(item => 
                <InProgressItem 
                    key={'inprogress'+item.taskid} 
                    title={item.task_title} 
                    taskid={item.taskid} 
                    toggleSelected={toggleSelected}
                    delTask={delTask}/>)}
        </div>
    )   
}

InProgressList.propTypes = {
    toggleSelected: PropTypes.func,
    inProgressList: PropTypes.array,
    delTask: PropTypes.func
}

export default InProgressList
