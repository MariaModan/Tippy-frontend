import React, { Component } from 'react';
import InProgressItem from './InProgressItem';

class InProgressList extends Component {
    render() {
        return (
            <div>
                {this.props.inProgressList.length>0?this.props.inProgressList.map(item => 
                    <InProgressItem 
                        key={'inprogress'+item.taskid} 
                        title={item.task_title} 
                        taskid={item.taskid} 
                        addToSelectedTasks={this.props.addToSelectedTasks}/>) : <div></div>}
            </div>
        )
    }
}

export default InProgressList
