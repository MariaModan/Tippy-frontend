import React from 'react';
import UserInfo from './UserInfo';
import ProjectsInfo from './projectsSectionComponents/ProjectsInfo';
import SelectedProject from './selectedProjectComponents/SelectedProject';
import AddProject from './AddProject';
import Quote from './Quote';
import '../css/home.css';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedProject: {},
            //this will determine what gets shown on the right side of the window, the default is 'quote' which shows an insirational quote, when clicking on add project this will change to 'addProject' ans show AddProject component, when clicking on a project from the list it will change to selectedProject and load the SelectedProject component
            rightWindow:'quote'
        }
    }

    renderWindowSwitch = () => {
        switch(this.state.rightWindow){
            case 'selectedProject':
                return <SelectedProject project={this.state.selectedProject}/>
            case 'addProject':
                return <AddProject loadProject={this.loadProject} user={this.props.user}/>
            default:
                return <Quote />
        }
    }

    loadProject = (projectId, projectTitle) => {
        this.setState({
            rightWindow: 'selectedProject',
            selectedProject:{
                projectId: projectId,
                projectTitle: projectTitle,
            }
        })
    }

    openAddProject = () => {
        this.setState({
            rightWindow: 'addProject',
            selectedProject: {}
        })
    }

    render () {
        // //modify this to account for names made of 2+ words as well
        // const capitalize = (string) => {
        //     return string.charAt(0).toUpperCase() + string.slice(1);
        // }

        return(
            <div >
                <div className='home-bg'></div>
                <div className='home-container'>
                    <UserInfo user={this.props.user}/>
                    <ProjectsInfo loadProject={this.loadProject} openAddProject={this.openAddProject}/>
                    {this.renderWindowSwitch()}
                </div>
            </div>
        )
    }
    
}

export default Home;