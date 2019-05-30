import React, { Component } from 'react'
import { login } from '../../components/UserFunctions/UserFunctions'
import './Login.css'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            error: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (!res.error)  {
                this.props.history.push(`/dashboard`)
            } else {
                this.setState({error: res.error})
            }
        })
    }

    render () {
        return (
            <div>
                <div className="container">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>
                            <div className="form-group">
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="alert alert-danger"
                                style={{ visibility: this.state.error !== '' ? 'visible' : 'hidden' }}>{this.state.error}</div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Sign in
                            </button>
                        </form>
                        <p class="margin medium-small"><a href="/register">Not Yet Registered? Register Now!</a></p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Login

