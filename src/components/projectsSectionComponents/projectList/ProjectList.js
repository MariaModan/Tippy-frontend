import React, { Component } from 'react';
import Project from './Project.js'

class ProjectList extends Component {
    
    render() {
        return (
            <div>
                {this.props.projectList.map(project => <Project key={project.projectid} title={project.project_title} loadProject={this.props.loadProject} projectId={project.projectid} delProject={this.props.delProject}/>)}
            </div>
        )
    }
}

export default ProjectList;
