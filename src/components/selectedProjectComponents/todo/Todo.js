import React, { Component } from 'react';
import TodoList from './TodoList';

class Todo extends Component {
    constructor (props) {
        super(props);
    }

    

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
            console.log(body)
            fetch('http://localhost:5500/addInProgress', {
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
            <div className='todo-container task-container'>
                <h3>To do</h3>
                <TodoList todoList={this.props.todoList} toggleSelected={this.props.toggleSelected}/>
                {this.props.todoList.length > 0 &&
                <button onClick={this.moveTaskToInProgress}>Move to In Progress</button>
                }
            </div>
        )
    }
}

export default Todo;
