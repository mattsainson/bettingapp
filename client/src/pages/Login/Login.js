
import React from 'react';
import API from '../../utils/API';
import UserContext from '../../utils/UserContext'; 

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
    currentUser: null
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleLogin = (onLogin) => {
    const { history } = this.props;
    const { email, password } = this.state;
    API.login({ email, password })
      .then(res => {
        onLogin(res.data);
        history.push('/dashboard')
      })
      .catch(err => {
        this.setState({ error: err.response.data.error })
      });
  }

  render() {
    const { email, password, error } = this.state;

    return (
      <UserContext.Consumer>
        {({onLogin}) => (
          <div>
             <div className="container" >
           <div className="col-md-6 mt-5 mx-auto">

            <h1>Please Login</h1>
            <label htmlFor="email">Email</label>
            <input
              autoComplete="on"
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />

            <button className="btn btn-lg btn-primary" onClick={() => this.handleLogin(onLogin)}>Login</button>
        <p class="margin medium-small"><a href="/register">Not Yet Registered? Register Now!</a></p>
        
            <br />
            { error && (
              <div className="alert">
                {error}
              </div>
            )}
           </div>
          </div>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Login;

