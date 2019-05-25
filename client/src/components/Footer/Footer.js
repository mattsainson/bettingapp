import React from 'react';
import './Footer.css';

const Footer = (props) => {
        return (
            <footer className="footer mt-auto py-3">
                <div className="container">
                    <span className="footerText">BetMo! <i class="far fa-copyright"></i> All rights reserved 2019</span>
                </div>
            </footer>
        );
}

export default Footer;