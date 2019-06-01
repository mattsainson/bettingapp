import React from 'react';
import './Footer.css';

const Footer = (props) => {
        return (
            <footer className="footer mt-auto py-3 bg-dark">
                <div className="container">
                    <span className="footerText">BetMo! <i className="far fa-copyright"></i> All rights reserved 2019</span>
                </div>
            </footer>
        );
}

export default Footer;