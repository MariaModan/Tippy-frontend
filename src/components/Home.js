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
            rightWindow:'quote',
            projectList: []
        }
    }

    renderWindowSwitch = () => {
        switch(this.state.rightWindow){
            case 'selectedProject':
                return <SelectedProject 
                            project={this.state.selectedProject} 
                            userid={this.props.user.userid} 
                            loadTodoList={this.loadTodoList}
                            loadInProgressList={this.loadInProgressList}/>
            case 'addProject':
                return <AddProject 
                            loadProject={this.loadProject} 
                            user={this.props.user} 
                            getProjectList={this.getProjectList}/>
            default:
                return <Quote />
        }
    }

    loadProject = (projectId, projectTitle) => {
        const body = JSON.stringify({
            projectid: projectId
        });

        // loadign the todo, inprogress, and finished lists for the choosen project        
        fetch('http://localhost:5500/listtodo', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: body
        })
        .then(response => response.json())
        .then(todos => {
            this.setState({
                    selectedProject:{
                    projectId: projectId,
                    projectTitle: projectTitle,
                    todoList: todos
                }
            })
            
            return fetch('http://localhost:5500/listinprogress', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: body
            })
        })
        .then(response => response.json())
        .then(inprogress => {
            this.setState({
                rightWindow: 'selectedProject',
                selectedProject: {...this.state.selectedProject, inProgressList: inprogress}
            })
        })
        .catch(err => console.log(err))
          
}

    loadTodoList = (projectid) => {
        const body = JSON.stringify({
            projectid: projectid
        });

        fetch('http://localhost:5500/listtodo', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: body
        })
        .then(response => response.json())
        .then(todos => {
            this.setState({
                selectedProject: {...this.state.selectedProject, todoList: todos}                
            })
        })
    }

    loadInProgressList = (projectid) => {
        const body = JSON.stringify({
            projectid: projectid
        });

        fetch('http://localhost:5500/listinprogress', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: body
        })
        .then(response => response.json())
        .then(inProgress => {
            this.setState({
                selectedProject: {...this.state.selectedProject, inProgressList: inProgress}                
            })
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

    delProject = (projectid) => {
        const body = JSON.stringify({projectid: projectid})

        fetch('http://localhost:5500/delproject',{
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: body
        })
        .then(response => response.json())
        .then(data => this.getProjectList())
        .catch( err => console.log(err))

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
                    <ProjectsInfo loadProject={this.loadProject} openAddProject={this.openAddProject} projectList={this.state.projectList} getProjectList={this.getProjectList} delProject={this.delProject}/>
                    {this.renderWindowSwitch()}
                </div>
            </div>
        )
    }
    
}

export default Home;