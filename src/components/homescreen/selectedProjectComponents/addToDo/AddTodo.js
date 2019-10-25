import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            newTask: ''
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.projectid !== prevProps.projectid){
            this.setState({
                newTask: ''
            })
        }
    }

    onInputChange = (event) =>{
        this.setState({
            newTask: event.target.value
        })
    }

    addTodo = (event) => {
        event.preventDefault();
        const body = JSON.stringify({
            projectid: this.props.projectid,
            userid: this.props.userid,
            task_title: this.state.newTask
        })

        this.setState({
            newTask: ''
        })
        
        fetch('https://tippy-task-manager-backend.herokuapp.com/addtodo', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: body
        })
        .then(response => response.json())
        .then(data => {
            const {taskid, task_title} = data[0];
            const newTodo = {
                task_title,
                taskid,
                selected: false
            }
            this.props.addTodoToList(newTodo);
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <form className='add-todo' onSubmit={this.addTodo}>
                <input placeholder=' Add task...' value={this.state.newTask} onChange={this.onInputChange}></input>
                <button type='submit'>Add</button>
            </form>
        )
    }
}

AddTodo.propTypes = {
    projectid: PropTypes.number,
    userid: PropTypes.number,
    addTodoToList: PropTypes.func
}

export default AddTodo;
