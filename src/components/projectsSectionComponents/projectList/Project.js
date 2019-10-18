import React from 'react';

const Project = (props) => {
    return (
        <div className='project-list'>
            <p className='project-titles' onClick={props.loadProject.bind(this, props.projectId, props.title)}>{props.title}</p>
            <button onClick={props.delProject.bind(this, props.projectId)}>X</button>    
        </div>
    )
}

export default Project;
