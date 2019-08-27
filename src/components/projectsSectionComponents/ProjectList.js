import React, { Component } from 'react';
import Project from './Project.js'

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectList : [
                {
                    projectId: 1,
                    projectTitle: 'First Project',
                },
                {
                    projectId: 2,
                    projectTitle: 'Second Project',
                },
                {
                    projectId: 3,
                    projectTitle: 'Third Project',
                }
            ]
        }
    }
    render() {
        return (
            <div>
                {this.state.projectList.map(project => <Project key={project.projectId} title={project.projectTitle} loadProject={this.props.loadProject} projectId={project.projectId}/>)}
            </div>
        )
    }
}

export default ProjectList;
