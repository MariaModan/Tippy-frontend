import React, { Component } from 'react';
import InProgressItem from './InProgressItem';
import PropTypes from 'prop-types';

class InProgressList extends Component {
    render() {
        return (
            <div>
                {this.props.inProgressList.map(item => 
                    <InProgressItem 
                        key={'inprogress'+item.taskid} 
                        title={item.task_title} 
                        taskid={item.taskid} 
                        toggleSelected={this.props.toggleSelected}
                        delTask={this.delTask}/>)}
            </div>
        )
    }
}

InProgressList.propTypes = {
    toggleSelected: PropTypes.func,
    inProgressList: PropTypes.array
}

export default InProgressList
