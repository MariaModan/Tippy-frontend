import React, { Component } from 'react';
import Project from './Project.js';
import PropTypes from 'prop-types';

class ProjectList extends Component {
    
    render() {
        return (
            <div>
                {this.props.projectList.map(project => <Project key={project.projectid} title={project.project_title} loadProject={this.props.loadProject} projectId={project.projectid} delProject={this.props.delProject}/>)}
            </div>
        )
    }
}

ProjectList.propList = {
    loadProject: PropTypes.func,
    projectList: PropTypes.array,
    delProject: PropTypes.func
}

export default ProjectList;
