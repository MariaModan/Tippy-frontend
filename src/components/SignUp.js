import React from 'react';
import '../css/signup.css';

class SignUp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    onNameChange = (ev) => {
        this.setState ({
            name: ev.target.value
        });
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

    onSubmitRegister = (ev) => {
        ev.preventDefault();
    }

    render(){
        return(
            <div className='signupFormContainer'>
                    <h1>Sign up</h1>
                    <form >
                        <label htmlFor='name'/>
                        <input 
                            type='text' 
                            name='name' 
                            id='name' 
                            placeholder=' Name'
                            onChange={this.onNameChange}/>

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
                            className='signUpBtn btn' 
                            onClick={this.onSubmitRegister}>Sign up</button>
                    </form>
                    <dev className='signinRedirect'>
                        <p>Already have an account?</p>
                        <button 
                            onClick={()=>this.props.onRouteChange('signin')}>
                            Sign in</button>
                    </dev>
                    
                </div> 
        )
    }
}

export default SignUp;