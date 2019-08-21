import React from 'react';
import './App.css';
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      route: 'signin'
    }
  }

  onRouteChange = (newRoute) => {
    this.setState({
      route: newRoute
    })
  }

  renderRouteSwitch = (route) => {
    switch(route){
      case 'home':
        return (
          <div>
            <Header route={this.state.route}/>
          </div>)
      case 'signup':
          return (
            <div>
              <Header route={this.state.route}/>
              <SignUp onRouteChange={this.onRouteChange}/>
            </div>)
      default: 
        return (
          <div>
            <Header route={this.state.route}/>
            <SignIn onRouteChange={this.onRouteChange}/>
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
