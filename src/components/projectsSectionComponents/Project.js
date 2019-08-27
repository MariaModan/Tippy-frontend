import React from 'react';

const Project = (props) => {
    return (
        <div className='project-list'>
            <p className='project-titles' onClick={props.loadProject.bind(this, props.projectId, props.title)}>{props.title}</p>    
        </div>
    )
}

export default Project;
