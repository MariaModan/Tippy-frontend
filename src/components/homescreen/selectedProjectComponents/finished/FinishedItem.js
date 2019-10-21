import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FinishedItem extends Component {
    render() {
        return (
            <div className='task'>
                <label><input type='checkbox'></input>{this.props.title}</label>
            </div>
        )
    }
}

FinishedItem.propTypes = {
    title: PropTypes.string
}

export default  FinishedItem;
