
import React from 'react';
import './Footer.css'


export default function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <ul className="footer-list">
                    <li className="footer-item">
                        <div className="footer-logo">
                            <h2 className="footer-logo1">T</h2>
                            <h2 className="footer-logo2">
                                Trafalgar
                            </h2>
                        </div>
                        <p className="footer-text">
                            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
                            for everyone
                        </p>
                        <p className="footer-info">
                            ©Trafalgar PTY LTD 2020. All rights reserved
                        </p>
                    </li>
                    <li className="footer-item">
                        <h4 className="footer-subtitle">
                            Company
                        </h4>
                        <a href="#" className="footer-link">About</a>
                        <a href="#" className="footer-link">Testimonials</a>
                        <a href="#" className="footer-link">Find a doctor</a>
                        <a href="#" className="footer-link">Apps</a>
                    </li>
                    <li className="footer-item">
                        <h4 className="footer-subtitle">
                            Region
                        </h4>
                        <a href="#" className="footer-link">Indonesia</a>
                        <a href="#" className="footer-link">Singapore</a>
                        <a href="#" className="footer-link">Hong Kong</a>
                        <a href="#" className="footer-link">Canada</a>
                    </li>
                    <li className="footer-item">
                        <h4 className="footer-subtitle">
                            Help
                        </h4>
                        <a href="#" className="footer-link">Help center</a>
                        <a href="#" className="footer-link">Contact support</a>
                        <a href="#" className="footer-link">Instructions</a>
                        <a href="#" className="footer-link">How it works</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}