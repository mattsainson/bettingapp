import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        sessionStorage.removeItem('user')
        this.props.history.push(`/login`)
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                    <i className="fas fa-sign-in-alt fa-2x"></i>
                    </Link>
                </li>
                <li className="nav-item justify-content-end">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
        )
        const userLink = (
            <ul className="navbar-nav justify-content-md-end">
                 <li className="nav-item">
                    <Link to="/admin" className="nav-link">
                    <i class="fas fa-users-cog fa-2x"></i>
                     </Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                    <i className="fas fa-user fa-2x"></i>
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="/logout" onClick={this.logOut.bind(this)} className="nav-link">
                    <i className="fas fa-sign-out-alt fa-2x"></i>
                    </a>
                </li>
            </ul>
        )

        return (                
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"></span>
                </button>
                <a className="navbar-brand" id='nav1' href="/dashboard">BetMo!</a>
                <div className="collapse navbar-collapse navbar-brand justify-content-end"
                    id="navbar1">
                    
                    {sessionStorage.user ? userLink : loginRegLink}
                </div>

            </nav>
        )
    }
}

export default withRouter(Navbar)

