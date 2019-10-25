import React, { Component } from 'react';
import Todo from './todo/Todo';
import InProgress from './inprogress/InProgress';
import Finished from './finished/Finished';
import AddTodo from './addToDo/AddTodo';
import PropTypes from 'prop-types';

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

        fetch('https://tippy-task-manager-backend.herokuapp.com/listtodo', {
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
        
        fetch('https://tippy-task-manager-backend.herokuapp.com/listinprogress', {
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

        fetch('https://tippy-task-manager-backend.herokuapp.com/listfinished', {
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

    delTaskTodo = (taskid) => {
        const body = JSON.stringify({
            taskid: taskid
        })

        fetch('https://tippy-task-manager-backend.herokuapp.com/deltask-Todo',{
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: body
        })
        .then(response => response.json())
        .then(delTaskid => {
            this.setState({
                todoList: this.state.todoList.filter(task => task.taskid !== delTaskid)
            })
        })
        .catch( err => console.log(err))
    }

    delTaskInprogress = (taskid) => {
        const body = JSON.stringify({
            taskid: taskid
        })

        fetch('https://tippy-task-manager-backend.herokuapp.com/deltask-Inprogress',{
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: body
        })
        .then(response => response.json())
        .then(delTaskid => {
            this.setState({
                inProgressList: this.state.inProgressList.filter(task => task.taskid !== delTaskid)
            })
        })
        .catch( err => console.log(err))
    }

    delTaskFinished = (taskid) => {
        const body = JSON.stringify({
            taskid: taskid
        })

        fetch('https://tippy-task-manager-backend.herokuapp.com/deltask-Finished',{
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: body
        })
        .then(response => response.json())
        .then(delTaskid => {
            this.setState({
                finishedList: this.state.finishedList.filter(task => task.taskid !== delTaskid)
            })
        })
        .catch( err => console.log(err))
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
                        loadInProgressList={this.loadInProgressList}
                        delTask={this.delTaskTodo}
                        />
                    <InProgress 
                        loadInProgressList={this.loadInProgressList}
                        inProgressList={this.state.inProgressList}
                        projectid={this.props.projectId} 
                        userid={this.props.userid}
                        toggleSelected={this.toggleSelectedInProgress}
                        loadFinishedList={this.loadFinishedList}
                        delTask={this.delTaskInprogress}
                        />
                    <Finished 
                        finishedList={this.state.finishedList}
                        loadFinishedList={this.finishedList}
                        delTask={this.delTaskFinished}
                        />
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
