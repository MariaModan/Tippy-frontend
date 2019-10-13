import React, { Component } from 'react'
import InProgressList from './InProgressList';

class InProgress extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedTasks : []
        }
    }

    addToSelectedTasks = (taskid, title) => {
        this.setState({
            selectedTasks: [...this.state.selectedTasks, {taskid: taskid, title: title}]
        })
    }

    render() {
        return (
            <div className='inprogress-container task-container'>
                <h3>In Progress</h3>
                <InProgressList 
                    inProgressList={this.props.inProgressList}
                    addToSelectedTasks={this.addToSelectedTasks}/>
                {this.props.inProgressList.length > 0 &&
                <button>Move to Finished</button>
                }
            </div>
        )
    }
}

export default InProgress;
