import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Shield, Zap, Lock } from 'lucide-react';
import './About.css';

const About = () => {
    const values = [
        {
            icon: Shield,
            title: 'Integrity',
            description: 'Responsible and ethical operations in every interaction'
        },
        {
            icon: Target,
            title: 'Quality',
            description: 'Consistent standards and verification throughout the process'
        },
        {
            icon: Zap,
            title: 'Efficiency',
            description: 'Structured coordination and timeline management'
        },
        {
            icon: Lock,
            title: 'Confidentiality',
            description: 'Protecting client and supplier information with care'
        }
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="page-hero space-top-120">
                <div className="container">
                    <h1 className="heading-1">ABOUT AERION Gateway</h1>
                    <p className="body-large" style={{ marginTop: '32px', maxWidth: '800px' }}>
                        Professional sourcing and coordination partner supporting businesses across diverse product requirements.
                    </p>
                </div>
            </section>

            {/* Who We Are */}
            <section className="section space-top-96 space-bottom-96">
                <div className="container">
                    <div className="content-grid">
                        <div className="content-left">
                            <h2 className="heading-2">WHO WE ARE</h2>
                        </div>
                        <div className="content-right">
                            <p className="body-large">
                                Aerion Gateway is a professional sourcing and coordination partner supporting businesses
                                across diverse product requirements. We specialize in supplier coordination, requirement alignment,
                                and operational clarity — ensuring smooth execution without confusion.
                            </p>
                            <p className="body-medium" style={{ marginTop: '24px' }}>
                                Our approach combines industry expertise with structured processes, creating a seamless bridge
                                between your requirements and reliable execution. We handle the complexity so you can focus on
                                what matters most — growing your business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section space-bottom-96">
                <div className="container">
                    <div className="mission-card">
                        <div className="mission-content">
                            <h3 className="heading-3">OUR MISSION</h3>
                            <p className="body-large" style={{ marginTop: '24px' }}>
                                To simplify sourcing processes while maintaining integrity, efficiency, and confidentiality at every stage.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section space-bottom-120">
                <div className="container">
                    <div className="section-header">
                        <h2 className="heading-2">OUR VALUES</h2>
                        <p className="body-large section-subtitle">The principles that guide every decision we make</p>
                    </div>
                    <div className="values-grid">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <div key={index} className="value-card">
                                    <div className="value-icon">
                                        <IconComponent size={32} />
                                    </div>
                                    <h3 className="heading-4">{value.title}</h3>
                                    <p className="body-medium">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Client Approach */}
            <section className="approach-section space-bottom-120">
                <div className="container">
                    <div className="approach-grid">
                        <div className="approach-content">
                            <h2 className="heading-2">CLIENT-FIRST APPROACH</h2>
                            <p className="heading-4" style={{ marginTop: '24px', color: 'var(--brand-primary)' }}>
                                Professionalism You Can Rely On
                            </p>
                            <p className="body-large" style={{ marginTop: '24px' }}>
                                Strong partnerships are built on clarity and trust.
                            </p>
                        </div>
                        <div className="approach-list">
                            <div className="approach-item">
                                <h4 className="heading-4">Transparent Communication</h4>
                                <p className="body-medium">Clear, honest updates at every stage of the process</p>
                            </div>
                            <div className="approach-item">
                                <h4 className="heading-4">Regular Updates</h4>
                                <p className="body-medium">Consistent progress reports and timeline monitoring</p>
                            </div>
                            <div className="approach-item">
                                <h4 className="heading-4">Confidential Handling</h4>
                                <p className="body-medium">Secure management of all business information</p>
                            </div>
                            <div className="approach-item">
                                <h4 className="heading-4">No Hidden Processes</h4>
                                <p className="body-medium">Complete visibility into coordination and execution</p>
                            </div>
                        </div>
                    </div>
                    <p className="body-large" style={{ marginTop: '60px', textAlign: 'center', color: 'var(--brand-primary)' }}>
                        Your goals guide our coordination.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section space-top-96 space-bottom-96">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="heading-2">LET'S WORK TOGETHER</h2>
                        <p className="body-large" style={{ marginTop: '24px' }}>
                            Ready to experience professional sourcing coordination?
                        </p>
                        <div className="cta-buttons" style={{ marginTop: '40px' }}>
                            <Link to="/contact" className="btn-primary">
                                Get In Touch
                            </Link>
                            <Link to="/services" className="btn-secondary">
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;