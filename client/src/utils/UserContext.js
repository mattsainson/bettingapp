import React from 'react';

const Context = React.createContext();

export class UserProvider extends React.Component {
  state = {
    currentUser: null
  }

  login = (currentUser) => {
    this.setState({ currentUser });
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