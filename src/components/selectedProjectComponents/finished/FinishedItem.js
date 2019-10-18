import React, { Component } from 'react'

class FinishedItem extends Component {
    render() {
        return (
            <div>
                <label><input type='checkbox'></input>{this.props.title}</label>
            </div>
        )
    }
}

export default  FinishedItem;
