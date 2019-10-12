import React, { Component } from 'react';
import Todo from './todo/Todo';
import InProgress from './inprogress/InProgress';
import Finished from './finished/Finished';
import AddTodo from './todo/AddTodo';

class SelectedProject extends Component {
    constructor(props) {
        super(props);
}    

    render() {
        return (
            <div className='selected-project'>
                <header>{this.props.project.projectTitle}</header>
                <div className='project-container'>
                    <AddTodo 
                        projectid={this.props.project.projectId} 
                        userid={this.props.userid} 
                        loadTodoList={this.props.loadTodoList}/>
                    <Todo 
                        todoList={this.props.project.todoList} 
                        projectid={this.props.project.projectId} 
                        userid={this.props.userid} 
                        loadTodoList={this.props.loadTodoList}/>
                    <InProgress 
                        loadInProgressList={this.props.loadInProgressList}
                        inProgressList={this.props.project.inProgressList}/>
                    <Finished />
                </div>
                
            </div>
        )
    }
}

export default SelectedProject;
