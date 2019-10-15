import React, { Component } from 'react';
import TodoList from './TodoList';

class Todo extends Component {
    constructor (props) {
        super(props);
        this.state = {
            toDoTasks : this.props.todoList.map(item => item = {...item,              selected:false})
        }
    }

    toggleSelected = (taskid) => {

        this.setState({
            toDoTasks: this.state.toDoTasks.map( todo => {
                if(todo.taskid === taskid){
                    todo.selected = !todo.selected
                }
                return todo;
            })
        })        
    }

    moveTaskToInProgress = () => {
        this.state.toDoTasks.map( task => {
            let body ={};
            if(task.selected === true){
                body = JSON.stringify({
                    projectid: this.props.projectid,
                    userid: this.props.userid,
                    taskid: task.taskid,
                    task_title: task.task_title
                })
            }
            
            fetch('http://localhost:5500/addInProgress', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: body
            }).then( res => res.json())
            .then(data => {
                this.props.loadTodoList(this.props.projectid);
                this.props.loadInProgressList(this.props.projectid)
                this.setState({
                    toDoTasks : this.props.todoList.map(item => item = {...item, selected:false})
                })
            })
            .catch(err => console.log(err))
        })
    }

    render() {
        return (
            <div className='todo-container task-container'>
                <h3>To do</h3>
                <TodoList todoList={this.props.todoList} toggleSelected={this.toggleSelected}/>
                {this.props.todoList.length > 0 &&
                <button onClick={this.moveTaskToInProgress}>Move to In Progress</button>
                }
            </div>
        )
    }
}

export default Todo;
