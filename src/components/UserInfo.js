import React, { Component } from 'react';
import icon from '../img/profile-icon.svg';


class UserInfo extends Component {
    render() {
        return (
            <div className='userinfo-container'>
                <h1>Welcome back</h1>
                <div className='user-details'>
                    <img src={icon} alt='user icon' />
                    <h1>{this.props.user.name}</h1>
                </div>
            </div>
        )
    }
}

export default UserInfo