import React, { Component } from 'react'

class AddProject extends Component {
    constructor(props){
        super(props);
        this.state= {
            projectTitle: ''
        }
    }

    onprojectTitleChange = (ev) => {
        this.setState({
            projectTitle: ev.target.value
        })
    }

    submitNewProject = (event) => {
        event.preventDefault();
        const body = JSON.stringify({
            projectTitle: this.state.projectTitle,
            userid: this.props.user.userid
        });
        //TO DO
        //add verification that there is project name, otherwise return
        fetch('http://localhost:5500/addproject', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: body
        }).then( res => res.json())
        .then( projectid => {
            this.props.loadProject(projectid, this.state.projectTitle);
            this.props.getProjectList();
        })
    }

    render() {
        return (
            <div className='add-project-container'>
                <h1>New Project</h1>
                <form 
                    onSubmit={this.submitNewProject}>
                    <label htmlFor='project-name'>Project Name: 
                        <input 
                            type='text' 
                            name='projectTitle' 
                            id='project-name' 
                            onChange={this.onprojectTitleChange}/>
                        </label>
                    <button type='submit'>Create Project</button>
                </form>
            </div>
        )
    }
}

export default AddProject;
