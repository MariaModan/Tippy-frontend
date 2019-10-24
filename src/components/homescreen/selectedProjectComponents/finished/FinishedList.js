import React from 'react';
import FinishedItem from './FinishedItem';
import PropTypes from 'prop-types';

const FinishedList = ({finishedList, delTask}) => {
    return (
        <div>
            {finishedList.map(item => 
                <FinishedItem 
                    key={'finished'+item.taskid} 
                    title={item.task_title} 
                    taskid={item.taskid} 
                    delTask={delTask}
                    />) } 
        </div>
    )
}

FinishedList.propTypes = {
    finishedList: PropTypes.array,
    delTask: PropTypes.func
}

export default FinishedList;
