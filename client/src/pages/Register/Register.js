
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
          <div className="container">
          <div className="row">
          <div class="col">
        </div>
        <div class="col">
        <div class="form-group">
        <h1>Sign Up for BetMo!</h1>
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
        <div class="form-group">
        <input className="form-control"
            placeholder="Full Name"
           autoComplete="off"
           type="text"
           name="name"
           value={name}
           onChange={this.handleChange}
                 />
        </div>
        <div class="form-group">
        <input className="form-control"
             placeholder="Enter Your Balance"
           autoComplete="off"
           type="number"
           name="balance"
           value={balance}
           onChange={this.handleChange}
        />
         </div>
        <br />
        <button className="btn btn-lg btn-dark" onClick={this.handleSignup}>Sign up</button>
        <p class="margin medium-small"><a href="/login">Already Registered? Login Now!</a></p>
        </div>
        <div class="col">
        </div>
      </div>
      </div>
      </div>

      
    );
  }
}

export default Register;