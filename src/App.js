import React from 'react';
import './App.css';
import SignIn from './components/loginComponents/SignIn';
import SignUp from './components/loginComponents/SignUp';
import Home from './components/homescreen/Home';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      route: 'home',
      user: {
        name: 'Test',
        userid: 8
      }
    }  
  }

  onRouteChange = (newRoute) => {
    this.setState({
      route: newRoute,
    })
  }

  loadUser = (user) => {
    this.setState({
      user: user,
      route: 'home'
    })
  }

  signOutUser = () => {
    this.setState({
      user: {},
      route: 'signin'
    })
    
  }

  renderRouteSwitch = (route) => {
    switch(route){
      case 'home':
        return (
          <div>
            <Home user={this.state.user} signOutUser={this.signOutUser}/>
          </div>)
      case 'signup':
          return (
            <div>
              <SignUp onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
            </div>)
      default: 
        return (
          <div>
            <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
          </div>)
    }
  }

  render(){
    return (
        <div className="App">
          {this.renderRouteSwitch(this.state.route)}
        </div>
    );
  }
  
}

export default App;
