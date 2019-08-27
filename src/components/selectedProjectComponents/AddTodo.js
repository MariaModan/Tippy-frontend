import React, { Component } from 'react'

class AddTodo extends Component {
    render() {
        return (
            <form className='add-todo'>
                <input placeholder=' Add task...'></input>
                <button type='submit'>Add</button>
            </form>
        )
    }
}

export default AddTodo;
