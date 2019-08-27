import React from 'react';
import '../../css/signup.css';

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

        const reqBody = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        fetch('http://localhost:5500/signup',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(reqBody)
        })
            .then(response => response.json())
            .then( user => {
                if(user.userid){
                    this.props.loadUser(user)
                }
            })
            .catch(err =>  console.log('error signing up user'))
    }

    render(){
        return(
            <div>
                <header>
                    <h1>Thank you for choosing Tippy</h1>
                    <p>We provide the best way for you to keep track of those projects' to-do lists</p>
                    <p>Sign up for an accunt below </p>
                </header>
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
                    <div className='signinRedirect'>
                        <p>Already have an account?</p>
                        <button 
                            onClick={()=>this.props.onRouteChange('signin')}>
                            Sign in</button>
                    </div>
                    
                </div> 
            </div>
        )
    }
}

export default SignUp;