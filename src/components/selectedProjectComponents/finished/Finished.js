import React, { Component } from 'react';
import FinishedList from './FinishedList';

class Finished extends Component {
    render() {
        return (
            <div className='finished-contained task-container'>
                <h3><span className='subtitle'>Done</span></h3>
                <FinishedList 
                    finishedList={this.props.finishedList}/>
                
            </div>
        )
    }
}

export default Finished;
