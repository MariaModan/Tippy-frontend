import React from 'react';
import PropTypes from 'prop-types';


class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    onEmailChange = (ev) => {
        this.setState ({
            email: ev.target.value
        });
    }

    onPasswordChange = (ev) => {
        this.setState ({
            password: ev.target.value
        });
    }

    onSubmitSignIn = (ev) => {
        ev.preventDefault();
        
        if (this.state.email.length === 0 || this.state.password.length === 0){
            alert('Please make sure to enter your email address and password before clicking submit')
        }else{
            const reqBody = {
                email: this.state.email,
                password: this.state.password
            }
    
            fetch('http://localhost:5500/signin',{
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(reqBody)
            })
                .then(response => response.json())
                .then(user => {
                    if (user.userid){
                        this.props.loadUser(user)
                    }
                })
                .catch(err => console.log('error signing in user'))
        }
    }

    render() {
        return(
            <div className='sign-container'>
                <header className='header'>
                    <h1>Welcome to Tippy</h1>
                    <p>We provide the best way for you to keep track of those projects' to-do lists.</p>
                    <p>Sign in or sign up for an accunt now!</p>
                </header>            
                <div className='form-container'>
                        <h1>Sign In</h1>
                        <form >
                            <label htmlFor='email'/>
                            <input 
                                type='email' 
                                name='email' 
                                id='email' 
                                placeholder=' Email'
                                onChange={this.onEmailChange}/>
                                
                            <label htmlFor='password'/>
                            <input 
                                type='password' 
                                name='password' 
                                id='password' 
                                placeholder=' Password'
                                onChange={this.onPasswordChange}/>

                            <button 
                                type='submit' 
                                id='button' 
                                className='signInBtn btn' 
                                onClick={this.onSubmitSignIn}>Sign in</button>
                        </form>
                        <div className='redirect'>
                            <p>Don't have an account?</p>
                            <button 
                                onClick={()=>this.props.onRouteChange('signup')}>
                                Sign up now
                            </button>
                        </div>   
                    </div> 
            </div>
        )
    } 

}

SignIn.propTypes = {
    onRouteChange: PropTypes.func,
    loadUser: PropTypes.func
}

export default SignIn;