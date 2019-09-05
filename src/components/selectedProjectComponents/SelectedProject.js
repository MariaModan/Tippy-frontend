import React, { Component } from 'react';
import Todo from './Todo';
import InProgress from './InProgress';
import Finished from './Finished';
import AddTodo from './AddTodo';

class SelectedProject extends Component {
    constructor(props) {
        super(props);
}    
    render() {
        return (
            <div className='selected-project'>
                <header>{this.props.project.projectTitle}</header>
                <div className='project-container'>
                    <AddTodo projectid={this.props.project.projectId} userid={this.props.userid} loadTodoList={this.props.loadTodoList}/>
                    <Todo todoList={this.props.project.todoList}/>
                    <InProgress />
                    <Finished />
                </div>
                
            </div>
        )
    }
}

export default SelectedProject;
