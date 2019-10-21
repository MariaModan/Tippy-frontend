import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    render() {
        return (
            <div className='task'>
                <label>
                    <input type='checkbox' 
                        onClick={this.props.toggleSelected.bind(this, this.props.taskid)}/>
                        {this.props.title}
                    </label>

            </div>
        )
    }
}

TodoItem.propTypes = {
    toggleSelected: PropTypes.func,
    taskid: PropTypes.number,
    title: PropTypes.string
}

export default TodoItem;