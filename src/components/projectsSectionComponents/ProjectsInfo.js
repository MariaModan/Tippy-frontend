import React, { Component } from 'react';
import SearchProject from './searchProject/SearchProject';
import ProjectList from './projectList/ProjectList';
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
                <ProjectList loadProject={this.props.loadProject} projectList={this.props.projectList} delProject={this.props.delProject}/>                
            </div>
        )
    }
}

export default ProjectsInfo;
