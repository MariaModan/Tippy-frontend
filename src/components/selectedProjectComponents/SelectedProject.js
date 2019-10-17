import React, { Component } from 'react';
import Todo from './todo/Todo';
import InProgress from './inprogress/InProgress';
import Finished from './finished/Finished';
import AddTodo from './todo/AddTodo';
import '../../css/project.css'

class SelectedProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: this.props.project.todoList.map(item => item = {...item, selected:false}),
            inProgressList: this.props.project.inProgressList.map(item => item = {...item, selected:false})
        }
    }

    loadTodoList = (projectid) => {
        const body = JSON.stringify({
            projectid: projectid
        });

        fetch('http://localhost:5500/listtodo', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: body
        })
        .then(response => response.json())
        .then(todos => {
            this.setState({
                todoList: todos.map(item => item = {...item, selected:false})               
            })
        })
    }

    loadInProgressList = (projectid) => {
        const body = JSON.stringify({
            projectid: projectid
        });

        fetch('http://localhost:5500/listinprogress', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: body
        })
        .then(response => response.json())
        .then(inProgress => {
            this.setState({
                inProgressList: inProgress.map(item => item = {...item, selected:false})              
            })
        })
    }

    addTodoToList = (newTodo) => {
        this.setState({
            todoList:[...this.state.todoList, newTodo]
        })
    }

    toggleSelectedTodo = (taskid) => {
        this.setState({
            todoList: this.state.todoList.map( todo => {
                if(todo.taskid === taskid){
                    todo.selected = !todo.selected
                }
                return todo;
            })
        })        
    }

    toggleSelectedInProgress = (taskid) => {
        this.setState({
            inProgressList: this.state.inProgressList.map( task => {
                if(task.taskid === taskid){
                    task.selected = !task.selected
                }
                return task;
            })
        })        
    }

    render() {
        return (
            <div className='selected-project'>
                <header>{this.props.project.projectTitle}</header>
                <div className='project-container'>
                    <AddTodo 
                        projectid={this.props.project.projectId} 
                        userid={this.props.userid}
                        addTodoToList={this.addTodoToList}/>
                    <Todo 
                        todoList={this.state.todoList} 
                        toggleSelected={this.toggleSelectedTodo}
                        projectid={this.props.project.projectId} 
                        userid={this.props.userid} 
                        loadTodoList={this.loadTodoList}
                        loadInProgressList={this.loadInProgressList}/>
                    <InProgress 
                        loadInProgressList={this.loadInProgressList}
                        inProgressList={this.state.inProgressList}
                        projectid={this.props.project.projectId} 
                        userid={this.props.userid}
                        toggleSelected={this.toggleSelectedInProgress}
                        loadFinishedList={this.props.loadFinishedList}/>
                    <Finished 
                        finishedList={this.props.project.finishedList}
                        loadFinishedList={this.props.finishedList}/>
                </div>
                
            </div>
        )
    }
}

export default SelectedProject;
