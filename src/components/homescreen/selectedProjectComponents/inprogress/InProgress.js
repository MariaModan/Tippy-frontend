import React, { Component } from 'react'
import InProgressList from './InProgressList';
import PropTypes from 'prop-types';

class InProgress extends Component {
    constructor (props) {
        super(props);
    }

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

            fetch('http://localhost:5500/addFinished', {
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

    render() {
        return (
            <div className='inprogress-container task-container'>
                <h3><span className='subtitle'>In Progress</span></h3>
                {this.props.inProgressList !== undefined &&
                <div>
                    <InProgressList 
                        inProgressList={this.props.inProgressList}
                        toggleSelected={this.props.toggleSelected}/>
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
    userid: PropTypes.number
}

export default InProgress;
