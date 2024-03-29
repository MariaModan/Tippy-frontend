import React, { Component } from 'react';
import TodoList from './TodoList';
import PropTypes from 'prop-types';

class Todo extends Component {
    moveTaskToInProgress = () => {
        this.props.todoList.map( task => {
            let body ={};
            if(task.selected === true){
                body = JSON.stringify({
                    projectid: this.props.projectid,
                    userid: this.props.userid,
                    taskid: task.taskid,
                    task_title: task.task_title
                })
            }
            
            fetch('https://tippy-task-manager-backend.herokuapp.com/addInProgress', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'},
                body: body
                }).then( res => res.json())
                .then(data => {
                    this.props.loadTodoList(this.props.projectid);
                    this.props.loadInProgressList(this.props.projectid)
                })
                .catch(err => console.log(err))            
        })
    }

    

    render() {
        return (
            <div className='todo-container lists-container'>
                <h3><span className='subtitle'>To do</span></h3>
                {this.props.todoList !== undefined &&
                    <div className='task-subcontainer'> 
                    <TodoList 
                        todoList={this.props.todoList} 
                        toggleSelected={this.props.toggleSelected}
                        delTask={this.props.delTask}/>
                    {this.props.todoList.length > 0 &&
                    <button 
                        className='list-btn' 
                        onClick={this.moveTaskToInProgress}>
                            Move to In Progress
                    </button>
                    }
                    </div>
                }
            </div>
        )
    }
}

Todo.propTypes = {
    todoList: PropTypes.array,
    toggleSelected: PropTypes.func,
    loadInProgressList: PropTypes.func,
    loadTodoList: PropTypes.func,
    delTask: PropTypes.func
}

export default Todo;
