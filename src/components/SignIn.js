import React from 'react';

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
    }

    render() {
        return(
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
                    <p>Don't have an account?</p>
                    <button 
                        className='regBtn btn'
                        onClick={()=>this.props.onRouteChange('signup')}>
                        Sign up now
                    </button>
                    
                </div> 
        )
    } 

}

export default SignIn;