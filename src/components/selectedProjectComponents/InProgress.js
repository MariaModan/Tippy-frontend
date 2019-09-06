import React, { Component } from 'react'
import InProgressList from './InProgressList';

class InProgress extends Component {
    render() {
        return (
            <div className='inprogress-container task-container'>
                <h3>In Progress</h3>
                <InProgressList />
            </div>
        )
    }
}

export default InProgress;
