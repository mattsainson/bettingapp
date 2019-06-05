
import React from 'react';
import API from '../../utils/API';
import UserContext from '../../utils/UserContext'; 
import "./Login.css";

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
           <div className="row">
           <div class="col">
            </div>
            <div class="col">
      
    
            <h1>Please Login</h1>
            <div class="form-group">
            <input className="form-control"
                placeholder="Email"
              autoComplete="on"
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            </div>

            <div class="form-group">
            <input className="form-control"
                placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            </div>
            <br />
            <button className="btn btn-lg btn-dark" onClick={() => this.handleLogin(onLogin)}>Login</button>
        <p class="margin medium-small"><a href="/register">Not Yet Registered? Register Now!</a></p>
        
            <br />
            { error && (
              <div className="alert">
                {error}
              </div>
            )}
            </div>
            <div class="col">
            </div>
           </div>
          </div>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Login;

