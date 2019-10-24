import React, { Component } from 'react';
import FinishedList from './FinishedList';
import PropTypes from 'prop-types';

class Finished extends Component {
    delTask = (taskid) => {
        console.log(taskid)
    }
    render() {
        return (
            <div className='finished-contained lists-container'>
                {this.props.finishedList !== undefined &&
                <div>
                    <h3><span className='subtitle'>Done</span></h3>
                    <FinishedList 
                        finishedList={this.props.finishedList}
                        delTask={this.props.delTask}/>
                </div>   
                }             
            </div>
        )
    }
}

Finished.propTypes = {
    finishedList: PropTypes.array,
    delTask: PropTypes.func
}

export default Finished;
