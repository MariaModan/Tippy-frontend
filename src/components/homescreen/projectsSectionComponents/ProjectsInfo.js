import React, { Component } from 'react';
import SearchProject from './searchProject/SearchProject';
import ProjectList from './projectList/ProjectList';
import icon from '../../../img/add-project-icon.svg';
import PropTypes from 'prop-types';

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
                {/* <SearchProject /> */}
                <ProjectList 
                    loadProject={this.props.loadProject} 
                    projectList={this.props.projectList} 
                    delProject={this.props.delProject}/>                
            </div>
        )
    }
}

ProjectsInfo.propTypes = {
    loadProject: PropTypes.func,
    openAddProject: PropTypes.func,
    projectList: PropTypes.array,
    getProjectList: PropTypes.func,
    delProject: PropTypes.func
}

export default ProjectsInfo;
