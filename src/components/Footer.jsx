import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-main">
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <span className="logo-text">AERION</span>
                                <span className="logo-sub">Excellence</span>
                            </div>
                            <p className="footer-tagline body-small">
                                Reliable Sourcing • Clear Coordination • Professional Execution
                            </p>
                        </div>

                        <div className="footer-links">
                            <div className="footer-column">
                                <h4 className="footer-title">Navigation</h4>
                                <Link to="/" className="footer-link">Home</Link>
                                <Link to="/services" className="footer-link">Services</Link>
                                <Link to="/products" className="footer-link">Products</Link>
                                <Link to="/about" className="footer-link">About</Link>
                                <Link to="/contact" className="footer-link">Contact</Link>
                            </div>

                            <div className="footer-column">
                                <h4 className="footer-title">Contact</h4>
                                <a href="mailto:info@aerionexcellence.com" className="footer-link">info@aerionexcellence.com</a>
                                <p className="footer-link">+91 XXXXX XXXXX</p>
                                <p className="footer-link caption">Mon–Sat | 10 AM – 7 PM</p>
                            </div>

                            <div className="footer-column">
                                <h4 className="footer-title">Connect</h4>
                                <div className="footer-social">
                                    <a href="#" className="social-link" aria-label="LinkedIn">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="#" className="social-link" aria-label="Instagram">
                                        <Instagram size={20} />
                                    </a>
                                    <a href="#" className="social-link" aria-label="WhatsApp">
                                        <MessageCircle size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p className="caption">© 2025 Aerion Gateway. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;