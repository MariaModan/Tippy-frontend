import React from 'react';
import PropTypes from 'prop-types';

const Project = (props) => {
    return (
        <div className='project'>
            <p className='project-titles' onClick={props.loadProject.bind(this, props.projectId, props.title)}>{props.title}</p>
            <button onClick={props.delProject.bind(this, props.projectId)}>X</button>    
        </div>
    )
}

Project.propTypes = {
    loadProject: PropTypes.func,
    projectId: PropTypes.number,
    title: PropTypes.string,
    delProject: PropTypes.func
}

export default Project;
