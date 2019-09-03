import React, { Component } from 'react';
import SearchProject from './SearchProject';
import ProjectList from './ProjectList';
import icon from '../../img/add-project-icon.svg';

class ProjectsInfo extends Component {
    componentDidMount(){
        this.props.getProjectList()
    }
    
    render() {
        return (
            <div className='projectsinfo-container'>
                <button 
                    type='button' 
                    className='add-project-btn'
                    onClick={this.props.openAddProject}>
                        <img src={icon} alt='add project icon' /> 
                        Add Project
                    </button>
                <SearchProject />
                <ProjectList loadProject={this.props.loadProject} projectList={this.props.projectList}/>                
            </div>
        )
    }
}

export default ProjectsInfo;