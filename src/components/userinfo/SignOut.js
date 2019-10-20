import React, { Component } from 'react'

class SignOut extends Component {
    render() {
        return (
            <div>
               <h1 className='signout' onClick={this.props.signOutUser}>Sign Out</h1> 
            </div>
        )
    }
}

export default SignOut;
