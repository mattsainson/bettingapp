import React, { Component } from 'react';
import './Main.css';

class Main extends Component {

    render(props) {
        return (
            <div className="main">
            {this.props.children}
            </div>
        );
    }
}

export default Main;