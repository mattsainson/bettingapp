import React, { Component } from 'react'
import { register } from '../../components/UserFunctions/UserFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            balance: ''
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
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            balance: this.state.balance
        }

        register(user).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please Register With BetMo!</h1>
                            <div className="form-group">
                                <input type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Enter Name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </div>
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
                            <div className="form-group">
                                <input type="number"
                                    className="form-control"
                                    name="balance"
                                    placeholder="Enter Your Balance"
                                    value={this.state.balance}
                                    onChange={this.onChange}
                                />
                            </div>
                            
                            <button type="submit"
                                className="btn btn-lg btn-primary btn-block">
                                Register
                            </button>
                        </form>
                        <p class="margin medium-small"><a href="/login">Already Registered? Log In Now</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register