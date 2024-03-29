import React from 'react';
import UserInfo from './userinfo/UserInfo';
import ProjectsInfo from './projectsSectionComponents/ProjectsInfo';
import SelectedProject from './selectedProjectComponents/SelectedProject';
import AddProject from './addProject/AddProject';
import Quote from './quote/Quote';
import '../../css/home.css';
import PropTypes from 'prop-types';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedProject:{},
            
            //this will determine what gets shown on the right side of the window, the default is 'quote' which shows an insirational quote, when clicking on add project this will change to 'addProject' ans show AddProject component, when clicking on a project from the list it will change to selectedProject and load the SelectedProject component
            rightWindow:'quote',
            projectList: []
        }
    }

    loadProject = (projectId, projectTitle) =>{
        this.setState({
            selectedProject:{
                projectId,
                projectTitle
            },
            rightWindow: 'selectedProject'
        })
    }
    
    openAddProject = () => {
        this.setState({
            rightWindow: 'addProject',
            selectedProject: {}
        })
    }

    getProjectList = () => {
        const body = JSON.stringify({userid: this.props.user.userid})

        fetch('https://tippy-task-manager-backend.herokuapp.com/listprojects',{
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

    delProject = (projectid) => {
        const body = JSON.stringify({projectid: projectid})

        fetch('https://tippy-task-manager-backend.herokuapp.com/delproject',{
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: body
        })
        .then(response => response.json())
        .then(data => {
            this.getProjectList();
            this.setState({
                rightWindow:'quote',
                selectedProject: {}
            })
        })
        .catch( err => console.log(err))
    }

    renderWindowSwitch = () => {
        switch(this.state.rightWindow){
            case 'selectedProject':
                return <SelectedProject
                            projectId={this.state.selectedProject.projectId}
                            projectTitle={this.state.selectedProject.projectTitle}
                            userid={this.props.user.userid}/>
            case 'addProject':
                return <AddProject 
                            loadProject={this.loadProject} 
                            user={this.props.user} 
                            getProjectList={this.getProjectList}/>
            default:
                return <Quote />
        }
    }

    render () {
        return(
            <div >
                <div className='home-bg'></div>
                <div className='home-container'>
                    <UserInfo 
                        user={this.props.user}
                        signOutUser={this.props.signOutUser}/>
                    <ProjectsInfo 
                        userid={this.props.user.userid}
                        loadProject={this.loadProject} 
                        openAddProject={this.openAddProject} 
                        projectList={this.state.projectList} 
                        getProjectList={this.getProjectList}
                        delProject={this.delProject}/>
                    {this.renderWindowSwitch()}
                </div>
            </div>
        )
    }
    
}

Home.propTypes = {
    user: PropTypes.object
}

export default Home;