import React, { Component } from 'react'

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            newTask: ''
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
        
        fetch('http://localhost:5500/addtodo', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: body
        })
        .then(response => response.json())
        .then(data => {
            this.props.loadTodoList(this.props.projectid);
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

export default AddTodo;
