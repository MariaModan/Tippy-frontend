import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FinishedItem extends Component {
    render() {
        return (
            <div className='task-container'>
                <label className='task'>
                    <input type='checkbox'></input>
                    {this.props.title}
                </label>
                <button 
                    className='del-task'
                    onClick={this.props.delTask}>
                        X
                </button>
            </div>
        )
    }
}

FinishedItem.propTypes = {
    title: PropTypes.string
}

export default  FinishedItem;
