import React, { Component } from 'react'
import InProgressList from './InProgressList';
import PropTypes from 'prop-types';

class InProgress extends Component {
    
    moveTaskToFinished = () => {
        this.props.inProgressList.map( task => {
            let body = {};
           
            if(task.selected === true){
                body = JSON.stringify({
                    projectid: this.props.projectid,
                    userid: this.props.userid,
                    taskid: task.taskid,
                    task_title: task.task_title
            })

            fetch('https://tippy-task-manager-backend.herokuapp.com/addFinished', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: body
            }).then( res => res.json())
            .then(data => {
                this.props.loadInProgressList(this.props.projectid);
                this.props.loadFinishedList(this.props.projectid);
            })
            .catch(err => console.log(err))
        }
        })  
    }

    delTask = (taskid) => {
        console.log(taskid)
    }

    render() {
        return (
            <div className='inprogress-container lists-container'>
                <h3><span className='subtitle'>In Progress</span></h3>
                {this.props.inProgressList !== undefined &&
                <div>
                    <InProgressList 
                        inProgressList={this.props.inProgressList}
                        toggleSelected={this.props.toggleSelected}
                        delTask={this.props.delTask}/>
                    {this.props.inProgressList.length > 0 &&
                    <button 
                        className='list-btn'
                        onClick={this.moveTaskToFinished}>
                            Move to Done
                    </button>
                    }
                </div>
                }
            </div>
        )
    }
}

InProgress.propTypes = {
    inProgressList: PropTypes.array,
    toggleSelected: PropTypes.func,
    loadInProgressList: PropTypes.func,
    loadFinishedList: PropTypes.func,
    projectid: PropTypes.number,
    userid: PropTypes.number,
    delTask: PropTypes.func
}

export default InProgress;
