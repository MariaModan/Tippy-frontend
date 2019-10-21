import React, { Component } from 'react';
import FinishedItem from './FinishedItem';
import PropTypes from 'prop-types';

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

FinishedList.propTypes = {
    finishedList: PropTypes.array
}

export default FinishedList;
