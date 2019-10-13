import React, { Component } from 'react';
import TodoList from './TodoList';

class Todo extends Component {
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

    moveTaskToInProgress = () => {
        this.state.selectedTasks.map( task => {
            const body = JSON.stringify({
                projectid: this.props.projectid,
                userid: this.props.userid,
                taskid: task.taskid,
                task_title: task.title
            })

            fetch('http://localhost:5500/addInProgress', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
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
                <TodoList todoList={this.props.todoList} addToSelectedTasks={this.addToSelectedTasks}/>
                {this.props.todoList.length > 0 &&
                <button onClick={this.moveTaskToInProgress}>Move to In Progress</button>
                }
            </div>
        )
    }
}

export default Todo;
