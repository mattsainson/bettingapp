
import React from 'react';
import API from '../../utils/API';

class Register extends React.Component {
  state = {
    email: "",
    password: "",
    name: "",
    balance: "",
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSignup = () => {
    const { history } = this.props;
    const { email, password, name, balance } = this.state;
    API.signup({ email, password, name, balance })
      .then(res => history.push('/login') )
      .catch(err => console.log(err))
  }

  render() {
    const { email, password, name, balance } = this.state;

    return (
      <div>
        <h1>Sign up</h1>
        <label htmlFor="name">Email</label>
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
        <label htmlFor="name">Name</label>
        <input
           autoComplete="off"
           type="text"
           name="name"
           value={name}
           onChange={this.handleChange}
        />
        <label htmlFor="name">Balance</label>
        <input
           autoComplete="off"
           type="number"
           name="balance"
           value={balance}
           onChange={this.handleChange}
        />

        <button className="btn btn-lg btn-primary" onClick={this.handleSignup}>Sign up</button>
        <p class="margin medium-small"><a href="/login">Already Registered? Login Now!</a></p>
      </div>
    );
  }
}

export default Register;