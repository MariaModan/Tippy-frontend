import React, { Component } from 'react'

class InProgressItem extends Component {
    render() {
        return (
            <div>
                <label><input type='checkbox' onClick={this.props.toggleSelected.bind(this, this.props.taskid, this.props.title)}/>{this.props.title}</label>
            </div>
        )
    }
}

export default InProgressItem;
