import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { categories } from '../utils/products';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/products', label: 'Products' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            setIsDropdownOpen(false);
        }
    };

    const toggleDropdown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        <span className="logo-text">AERION</span>
                        <span className="logo-sub">Gateway</span>
                    </Link>

                    <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                        {navLinks.map((link) => {
                            if (link.label === 'Products') {
                                return (
                                    <div key={link.path} className={`nav-item-dropdown ${isDropdownOpen ? 'dropdown-open' : ''}`}>
                                        <span
                                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                            onClick={toggleDropdown}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {link.label} <ChevronDown size={14} className="dropdown-icon" />
                                        </span>
                                        <div className="dropdown-menu">
                                            {categories.map((category, index) => (
                                                <Link
                                                    key={index}
                                                    to={`/products?category=${encodeURIComponent(category.title)}`}
                                                    className="dropdown-link"
                                                    onClick={() => {
                                                        setIsMenuOpen(false);
                                                        setIsDropdownOpen(false);
                                                    }}
                                                >
                                                    {category.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;