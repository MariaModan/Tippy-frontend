import React from 'react';

const Header = ( { route } ) => {
    const renderHeaderSwitch = (param) => {
        switch (param){
            case 'signup':
                return (
                    <div>
                        <h1>Thank you for choosing Tippy</h1>
                        <p>We provide the best way for you to keep track of those projects' to-do lists</p>
                        <p>Sign up for an accunt below </p>
                    </div>);
            case 'home':
                return (
                    <div>
                        <h1>Welcome back [placeholder for user name]</h1>
                        <p>[placeholder for cute motivational quote]</p>
                    </div>
                 );
            default:
                return (
                    <div>
                        <h1>Welcome to Tippy</h1>
                        <p>We provide the best way for you to keep track of those projects' to-do lists</p>
                        <p>Sign in or sign up for an accunt now!</p>
                    </div>);
        }
    }
    

    return(
        <header>
            {renderHeaderSwitch(route)}
        </header>
    )
}

export default Header;