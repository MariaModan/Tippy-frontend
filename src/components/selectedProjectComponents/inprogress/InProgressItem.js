import React, { Component } from 'react'

class InProgressItem extends Component {
    render() {
        return (
            <div>
                <input type='checkbox' onClick={this.props.toggleSelected.bind(this, this.props.taskid, this.props.title)}></input>{this.props.title}
            </div>
        )
    }
}

export default InProgressItem;
