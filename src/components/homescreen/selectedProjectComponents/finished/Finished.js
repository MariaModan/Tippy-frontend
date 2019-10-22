import React, { Component } from 'react';
import FinishedList from './FinishedList';
import PropTypes from 'prop-types';

class Finished extends Component {
    render() {
        return (
            <div className='finished-contained lists-container'>
                {this.props.finishedList !== undefined &&
                <div>
                    <h3><span className='subtitle'>Done</span></h3>
                    <FinishedList 
                        finishedList={this.props.finishedList}
                        delTask={this.delTask}/>
                </div>   
                }             
            </div>
        )
    }
}

Finished.propTypes = {
    finishedList: PropTypes.array
}

export default Finished;
