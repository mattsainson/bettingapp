import React from 'react';

const Context = React.createContext();
const user = window.sessionStorage.getItem('user');
const initialUser = user ? JSON.parse(user) : null;

export class UserProvider extends React.Component {
  state = {
    currentUser: initialUser 
  }

  onLogin = (currentUser) => {
    this.setState({ currentUser });
    window.sessionStorage.setItem('user', JSON.stringify(currentUser));
  }

  render(){
    return (
      <Context.Provider value={{
        user: this.state.currentUser,
        onLogin: this.onLogin
      }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;