import React, { Component } from 'react';
import Todo from './todo/Todo';
import InProgress from './inprogress/InProgress';
import Finished from './finished/Finished';
<<<<<<< HEAD:src/components/homescreen/selectedProjectComponents/SelectedProject.js
import AddTodo from './addToDo/AddTodo';
import '../../../css/project.css';
import PropTypes from 'prop-types';
=======
import AddTodo from './addTodo/AddTodo';
>>>>>>> 18e3c455ca3a17ed39d4cd3b4fb559554006324a:src/components/selectedProjectComponents/SelectedProject.js

class SelectedProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: this.loadTodoList(this.props.projectId),
            inProgressList: this.loadInProgressList(this.props.projectId),
            finishedList: this.loadFinishedList(this.props.projectId)
        }
    }
    
    componentDidUpdate(prevProps){
        if (this.props.projectId !== prevProps.projectId){
            this.loadTodoList(this.props.projectId);
            this.loadInProgressList(this.props.projectId);
            this.loadFinishedList(this.props.projectId);
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

    loadFinishedList = (projectid) => {
        const body = JSON.stringify({
            projectid: projectid
        });

        fetch('http://localhost:5500/listfinished', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: body
        })
        .then(response => response.json())
        .then(finishedList => {
            this.setState({
                finishedList: finishedList.map(item => item = {...item, selected:false})                
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
                <header>{this.props.projectTitle}</header>
                <div className='project-container'>
                    <AddTodo 
                        projectid={this.props.projectId} 
                        userid={this.props.userid}
                        addTodoToList={this.addTodoToList}/>
                    <Todo 
                        todoList={this.state.todoList} 
                        toggleSelected={this.toggleSelectedTodo}
                        projectid={this.props.projectId} 
                        userid={this.props.userid} 
                        loadTodoList={this.loadTodoList}
                        loadInProgressList={this.loadInProgressList}/>
                    <InProgress 
                        loadInProgressList={this.loadInProgressList}
                        inProgressList={this.state.inProgressList}
                        projectid={this.props.projectId} 
                        userid={this.props.userid}
                        toggleSelected={this.toggleSelectedInProgress}
                        loadFinishedList={this.loadFinishedList}/>
                    <Finished 
                        finishedList={this.state.finishedList}
                        loadFinishedList={this.finishedList}/>
                </div>
                
            </div>
        )
    }
}

SelectedProject.propTypes = {
    projectTitle: PropTypes.string,
    projectId: PropTypes.number,
    userid: PropTypes.number,
    addTodoToList: PropTypes.func,
    toggleSelected: PropTypes.func,
    toggleSelectedInProgress: PropTypes.func,
    toggleSelectedTodo: PropTypes.func,
    loadTodoList: PropTypes.func,
    loadInProgressList: PropTypes.func,
    loadFinishedList: PropTypes.func,
}

export default SelectedProject;
