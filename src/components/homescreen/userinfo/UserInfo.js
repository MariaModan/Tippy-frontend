import React, { Component } from 'react';
import icon from '../../../img/profile-icon.svg';
import SignOut from './SignOut.js';
import PropTypes from 'prop-types';


class UserInfo extends Component {
    render() {
        return (
            <div className='userinfo-container'>
                <div className='greeting-container'>
                    <h1 className='greeting'>Welcome back</h1>
                    {/* make a collapsable menu with sign out and change password */}
                    <SignOut />
                </div>
                <div className='user-details'>
                    <img src={icon} alt='user icon' />
                    <h1>{this.props.user.name}</h1>
                </div>
            </div>
        )
    }
}

UserInfo.propTypes = {
    user: PropTypes.object
}

export default UserInfo;