import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InProgressItem extends Component {
    render() {
        return (
            <div className='task'>
                <label>
                    <input 
                        type='checkbox' 
                        onClick={this.props.toggleSelected.bind(this, this.props.taskid, this.props.title)}/>{this.props.title}
                    </label>
            </div>
        )
    }
}

InProgressItem.propTypes = {
    toggleSelected: PropTypes.func,
    taskid: PropTypes.number,
    title: PropTypes.string
}

export default InProgressItem;
