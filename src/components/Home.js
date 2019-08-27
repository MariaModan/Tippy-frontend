import React from 'react';
import UserInfo from './UserInfo';
import ProjectsInfo from './projectsSectionComponents/ProjectsInfo';
import SelectedProject from './selectedProjectComponents/SelectedProject';
import Quote from './Quote';
import '../css/home.css';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedProject: {}
        }
    }

    loadProject = (projectId, projectTitle) => {
        this.setState({
            selectedProject:{
                projectId: projectId,
                projectTitle: projectTitle,
            }
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
                    <ProjectsInfo loadProject={this.loadProject}/>
                    {this.state.selectedProject.projectId ? <SelectedProject project={this.state.selectedProject}/> : <Quote />}
                </div>
            </div>
        )
    }
    
}

export default Home;