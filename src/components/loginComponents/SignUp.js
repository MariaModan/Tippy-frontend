import React from 'react';
import PropTypes from 'prop-types';

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

        const letters = /[A-Za-z]/;
        const onlyLetters = /^[a-zA-Z]+$/;
        const numbers = /[0-9]/;
  
        if (this.state.email.length === 0){

            alert('Please make sure to enter your name, email address and password before clicking submit.')

        }else if (!this.state.password.match(letters) || !this.state.password.match(numbers) || this.state.password.length<6) {
            this.setState({
                password: ''
            })

            alert('Your password must be at least 6 characters long, and include at least a letter and a number.')

        }else if (this.state.name.length < 2 || !this.state.name.match(onlyLetters)){

            this.setState({
                name: ''
            })

            alert('Your name must be at least 2 characters long and use only letters.')

        }else{

            const reqBody = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }

            fetch('http://localhost:5500/registeredUser',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'email': this.state.email})
            })
            .then(response => response.json())
            .then(data => {

                if(data === this.state.email){
                    
                    this.setState({
                        email: ''
                    })

                    alert('This email adress is already taken.')
                    
                }else{
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
            })     
            }
    }

    render(){
        return(
            <div className='sign-container'>
                <header className='header'>
                    <h1>Thank you for choosing Tippy</h1>
                    <p>We provide the best way for you to keep track of those projects' to-do lists</p>
                    <p>Sign up for an accunt below </p>
                </header>
                <div className='form-container'>
                    <h1>Sign up</h1>
                    <form >
                        <label htmlFor='name'/>
                        <input 
                            type='text' 
                            name='name' 
                            id='name' 
                            placeholder=' Name'
                            value={this.state.name}
                            onChange={this.onNameChange}/>

                        <label htmlFor='email'/>
                        <input 
                            type='email' 
                            name='email' 
                            id='email' 
                            placeholder=' Email'
                            value={this.state.email}
                            onChange={this.onEmailChange}/>

                        <label htmlFor='password'/>
                        <input 
                            type='password' 
                            name='password' 
                            id='password' 
                            placeholder=' Password'
                            value={this.state.password}
                            onChange={this.onPasswordChange}/>

                        <button 
                            type='submit' 
                            id='button' 
                            className='signUpBtn btn' 
                            onClick={this.onSubmitRegister}>Sign up</button>
                    </form>
                    <div className='redirect'>
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

SignUp.propTypes = {
    onRouteChange: PropTypes.func,
    loadUser: PropTypes.func
}

export default SignUp;