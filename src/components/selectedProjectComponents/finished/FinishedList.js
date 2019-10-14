import React, { Component } from 'react';
import FinishedItem from './FinishedItem';

class FinishedList extends Component {
    render() {
        return (
            <div>
               {this.props.finishedList.map(item => 
                    <FinishedItem 
                        key={'finished'+item.taskid} 
                        title={item.task_title} 
                        taskid={item.taskid} 
                        />) } 
            </div>
        )
    }
}

export default FinishedList;
