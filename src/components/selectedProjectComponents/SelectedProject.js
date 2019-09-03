import React, { Component } from 'react';
import Todo from './Todo';
import InProgress from './InProgress';
import Finished from './Finished';
import AddTodo from './AddTodo';

class SelectedProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                { taskTitle:'first task', 
                 taskId: 2},
                {taskTitle:'second task',
                taskId: 2}],
            inProgressList: [
                {taskTitle:'third task',
                taskId: 3}],
            finishedList: [
                {taskTitle:'fourth task',
                taskId: 4}]
        }
    }

    componentDidMount(){
        //load tasks from the database based on the project id received in props
    }
    
    render() {
        return (
            <div className='selected-project'>
                <header>{this.props.project.projectTitle}</header>
                <div className='project-container'>
                    <AddTodo />
                    <Todo todoList={this.state.todoList}/>
                    <InProgress inProgressList={this.state.inProgressList}/>
                    <Finished finishedList={this.state.finishedList}/>
                </div>
                
            </div>
        )
    }
}

export default SelectedProject;
