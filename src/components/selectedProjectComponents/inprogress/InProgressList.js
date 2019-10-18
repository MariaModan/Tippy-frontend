import React, { Component } from 'react';
import InProgressItem from './InProgressItem';

class InProgressList extends Component {
    render() {
        return (
            <div>
                {this.props.inProgressList.map(item => 
                    <InProgressItem 
                        key={'inprogress'+item.taskid} 
                        title={item.task_title} 
                        taskid={item.taskid} 
                        toggleSelected={this.props.toggleSelected}/>)}
            </div>
        )
    }
}

export default InProgressList
