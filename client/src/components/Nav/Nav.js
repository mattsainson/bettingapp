import React from 'react';
import './Nav.css';

const Nav = (props) => {
        return (
            <div className="Nav">
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <a className="navbar-brand myNav" href="/">Betting App</a>
                    <ul className="navbar-nav mr-auto">
                    </ul>
                    <span className="navbar-text">
                        User: {props.user}
                        </span>
                </nav>
            </div>
        );
}

export default Nav;