import React, { Component } from 'react';
import Project from './Project.js'

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectList: []
        }
    }
    componentDidMount() {
        const body = JSON.stringify({userid: this.props.userid})

        fetch('http://localhost:5500/listprojects',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: body
        })
        .then(response => response.json())
        .then( projectsArr => {
            this.setState({
                projectList: [...projectsArr]
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.projectList.map(project => <Project key={project.projectid} title={project.project_title} loadProject={this.props.loadProject} projectId={project.projectid}/>)}
            </div>
        )
    }
}

export default ProjectList;
