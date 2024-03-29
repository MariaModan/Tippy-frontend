import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddProject extends Component {
    constructor(){
        super();
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

        if(this.state.projectTitle.length === 0){
            alert('Please choose a name for your project.')
        }else {
            const body = JSON.stringify({
                projectTitle: this.state.projectTitle,
                userid: this.props.user.userid
            });
            
            fetch('https://tippy-task-manager-backend.herokuapp.com/addproject', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: body
            }).then( res => res.json())
            .then( projectid => {
                this.props.loadProject(projectid, this.state.projectTitle);
                this.props.getProjectList();
            })
        }   
    }

    render() {
        return (
            <div className='add-project-container'>
                <div className='add-project-container-inner'>
                    <h1>New Project</h1>
                    <form 
                        onSubmit={this.submitNewProject}>
                        <label class-name='add-project-label' htmlFor='project-name'>Project Name: 
                            <input 
                                type='text' 
                                name='projectTitle' 
                                id='project-name' 
                                onChange={this.onprojectTitleChange}/>
                            </label>
                        <button className='add-project-btn' type='submit'>Create Project</button>
                    </form>
                </div>
            </div>
        )
    }
}

AddProject.propTypes = {
    user: PropTypes.object,
    loadProject: PropTypes.func,
    getProjectList: PropTypes.func
}

export default AddProject;
