import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './Home.css';

const Home = () => {
    const features = [
        {
            title: 'Product Sourcing',
            description: 'Identification and evaluation of suitable options based on quality, scale, and feasibility.'
        },
        {
            title: 'Supplier Coordination',
            description: 'Clear communication, confirmations, and alignment — without back-and-forth.'
        },
        {
            title: 'Quality & Documentation Support',
            description: 'Specification checks, documentation review, and readiness confirmation.'
        },
        {
            title: 'Process & Dispatch Coordination',
            description: 'Timeline monitoring and structured handling until completion.'
        }
    ];

    const categories = [
        {
            title: 'Lifestyle & Home Products',
            image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80'
        },
        {
            title: 'Textile & Carpets',
            image: 'https://images.unsplash.com/photo-1542044801-30d3e45ae49a?w=800&q=80'
        },
        {
            title: 'Packaging Solutions',
            image: 'https://images.unsplash.com/photo-1617825295690-28ae56c56135?w=800&q=80'
        },
        {
            title: 'Glass, Plastic & Utilities',
            image: 'https://images.unsplash.com/photo-1541698321721-c083f55816da?w=800&q=80'
        },
        {
            title: 'Customized Products',
            image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?w=800&q=80'
        }
    ];

    const benefits = [
        'Verified supplier network',
        'Professional coordination',
        'Transparent documentation support',
        'Time-saving processes',
        'Multi-category flexibility'
    ];

    const steps = [
        { number: '01', text: 'Share your requirement' },
        { number: '02', text: 'We identify suitable options' },
        { number: '03', text: 'You select the best fit' },
        { number: '04', text: 'We coordinate specifications' },
        { number: '05', text: 'Dispatch support until completion' }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-background">
                    <img
                        src="aeriooon.avif"
                        alt="Supply chain operations"
                        className="hero-image"
                        style={{ opacity: 0.5 }}
                    />
                    <div className="hero-overlay"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <h1 className="brand-display">AERION GATEWAY. WORK SMARTER. EFFORT LESS.</h1>
                        <p className="body-large hero-subtitle">
                            Reliable sourcing and coordination support designed to simplify complex supply requirements.
                            We help businesses connect with the right products, manage processes efficiently, and move forward with confidence.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/contact" className="btn-primary">
                                Share Your Requirements
                            </Link>
                            <Link to="/services" className="btn-secondary">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge Section */}
            <section className="section space-top-120 space-bottom-120">
                <div className="container">
                    <div className="challenge-grid">
                        <div className="challenge-content">
                            <h2 className="heading-2">THE CHALLENGE WE SOLVE — AND HOW WE DO IT</h2>
                        </div>
                        <div className="challenge-description">
                            <p className="body-large">
                                Managing suppliers, specifications, and timelines often becomes fragmented and time-consuming.
                                Multiple touchpoints, unclear communication, and inconsistent updates slow businesses down and create unnecessary effort.
                            </p>
                            <p className="body-large">
                                Aerion Excellence brings structure, clarity, and professional coordination — acting as a single point of support
                                between your requirement and execution. The result: minimal effort from your side and reliable outcomes.
                            </p>
                            <p className="body-medium" style={{ color: 'var(--brand-primary)', marginTop: '20px' }}>
                                No complexity. No unnecessary follow-ups. Just smooth execution.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section space-bottom-120" style={{ background: 'var(--bg-card)' }}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="heading-2">OUR END-TO-END SOURCING & COORDINATION SUPPORT</h2>
                        <p className="body-large section-subtitle">We manage the complete coordination process so you don't have to.</p>
                    </div>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <h3 className="heading-4">{feature.title}</h3>
                                <p className="body-medium">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="section space-top-120 space-bottom-120">
                <div className="container">
                    <div className="section-header">
                        <h2 className="heading-2">PRODUCT CATEGORIES WE SUPPORT</h2>
                        <p className="body-large section-subtitle">Our network spans multiple product segments, allowing flexible and reliable support.</p>
                    </div>
                    <div className="categories-grid">
                        {categories.map((category, index) => (
                            <div key={index} className="category-card">
                                <div className="category-image-wrapper">
                                    <img src={category.image} alt={category.title} className="category-image" />
                                </div>
                                <div className="category-content">
                                    <h3 className="heading-4">{category.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="section-cta" style={{ marginTop: '60px' }}>
                        <Link to="/products" className="btn-primary">
                            Explore All Categories <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section space-bottom-120" style={{ background: 'var(--bg-card)' }}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="heading-2">HOW IT WORKS</h2>
                        <p className="body-large section-subtitle">Simple. Structured. Efficient.</p>
                    </div>
                    <div className="steps-grid">
                        {steps.map((step, index) => (
                            <div key={index} className="step-card">
                                <div className="step-number">{step.number}</div>
                                <p className="body-medium">{step.text}</p>
                            </div>
                        ))}
                    </div>
                    <p className="body-large" style={{ textAlign: 'center', marginTop: '60px', color: 'var(--brand-primary)' }}>
                        Your time saved. Your work simplified.
                    </p>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section space-top-120 space-bottom-120">
                <div className="container">
                    <div className="why-choose-grid">
                        <div className="why-choose-content">
                            <h2 className="heading-2">WHY AERION EXCELLENCE</h2>
                            <p className="body-large" style={{ marginTop: '24px' }}>
                                Smart Workflows. Clear Communication. Reliable Outcomes.
                            </p>
                            <p className="body-medium" style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
                                Because sourcing support should feel professional — not stressful.
                            </p>
                        </div>
                        <div className="benefits-list">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="benefit-item">
                                    <CheckCircle2 size={24} color="var(--brand-primary)" />
                                    <span className="body-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="body-large" style={{ marginTop: '60px', textAlign: 'center' }}>
                        We make complex sourcing feel simple — helping you achieve more with less effort.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section space-top-120 space-bottom-120">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="heading-1">READY TO SIMPLIFY YOUR PROCESS?</h2>
                        <p className="body-large" style={{ marginTop: '24px' }}>Tell us what you need — we'll take it from there.</p>
                        <div className="cta-buttons" style={{ marginTop: '40px' }}>
                            <Link to="/contact" className="btn-primary">
                                Share Your Requirements
                            </Link>
                            <Link to="/about" className="btn-secondary">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;