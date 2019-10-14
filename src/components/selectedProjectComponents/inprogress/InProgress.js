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

    moveTaskToFinished = () => {
        this.state.selectedTasks.map( task => {
            const body = JSON.stringify({
                projectid: this.props.projectid,
                userid: this.props.userid,
                taskid: task.taskid,
                task_title: task.title
            })
            
            fetch('http://localhost:5500/addFinished', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: body
            }).then( res => res.json())
            .then(data => {
                this.props.loadInProgressList(this.props.projectid);
                this.props.loadFinishedList(this.props.projectid);
                this.setState({
                    selectedTasks: []
                })
            })
            .catch(err => console.log(err))
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
                <button onClick={this.moveTaskToFinished}>Move to Finished</button>
                }
            </div>
        )
    }
}

export default InProgress;
