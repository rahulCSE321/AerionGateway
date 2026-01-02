import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Users, FileCheck, Truck, Sparkles } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: Package,
            title: 'Product Sourcing',
            description: 'Complete sourcing support from identification to selection',
            features: [
                'Requirement-based supplier identification',
                'Feasibility and suitability evaluation',
                'Sample coordination when required',
                'Quality assessment and verification'
            ]
        },
        {
            icon: Users,
            title: 'Supplier Communication & Coordination',
            description: 'Professional management of all supplier interactions',
            features: [
                'Professional communication handling',
                'Clear requirement alignment',
                'Timeline and specification confirmation',
                'Ongoing relationship management'
            ]
        },
        {
            icon: FileCheck,
            title: 'Quality & Documentation Support',
            description: 'Comprehensive documentation and quality assurance',
            features: [
                'Specification verification',
                'Documentation review and validation',
                'Pre-dispatch readiness checks',
                'Compliance confirmation'
            ]
        },
        {
            icon: Truck,
            title: 'Order & Process Management',
            description: 'End-to-end coordination until successful completion',
            features: [
                'Continuous coordination between parties',
                'Timeline and progress monitoring',
                'Dispatch-stage support',
                'Issue resolution and escalation management'
            ]
        },
        {
            icon: Sparkles,
            title: 'Custom Requirements',
            description: 'Specialized support for unique and non-standard needs',
            features: [
                'Tailored sourcing strategies',
                'Specialized supplier searches',
                'Custom specification management',
                'Unique requirement coordination'
            ]
        }
    ];

    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="page-hero space-top-120">
                <div className="container">
                    <h1 className="heading-1">OUR SOLUTIONS</h1>
                    <p className="body-large" style={{ marginTop: '32px', maxWidth: '800px' }}>
                        Comprehensive sourcing and coordination services designed to simplify your supply chain operations.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section space-top-96 space-bottom-120">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div key={index} className="service-card">
                                    <div className="service-header">
                                        <div className="service-icon">
                                            <IconComponent size={36} />
                                        </div>
                                        <div>
                                            <h3 className="heading-3">{service.title}</h3>
                                            <p className="body-medium" style={{ marginTop: '12px' }}>{service.description}</p>
                                        </div>
                                    </div>
                                    <div className="service-features">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="feature-item">
                                                <div className="feature-dot"></div>
                                                <span className="body-small">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section space-bottom-120">
                <div className="container">
                    <div className="section-header">
                        <h2 className="heading-2">OUR PROCESS</h2>
                        <p className="body-large section-subtitle">A structured approach to every engagement</p>
                    </div>
                    <div className="process-flow">
                        <div className="process-step">
                            <div className="process-number">01</div>
                            <h4 className="heading-4">Requirement Analysis</h4>
                            <p className="body-medium">Understanding your specific needs and objectives</p>
                        </div>
                        <div className="process-step">
                            <div className="process-number">02</div>
                            <h4 className="heading-4">Supplier Identification</h4>
                            <p className="body-medium">Finding and evaluating suitable partners</p>
                        </div>
                        <div className="process-step">
                            <div className="process-number">03</div>
                            <h4 className="heading-4">Coordination & Alignment</h4>
                            <p className="body-medium">Managing specifications and expectations</p>
                        </div>
                        <div className="process-step">
                            <div className="process-number">04</div>
                            <h4 className="heading-4">Quality Assurance</h4>
                            <p className="body-medium">Verifying standards and documentation</p>
                        </div>
                        <div className="process-step">
                            <div className="process-number">05</div>
                            <h4 className="heading-4">Execution Support</h4>
                            <p className="body-medium">Coordinating through dispatch and completion</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section space-top-96 space-bottom-96">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="heading-2">LET'S DISCUSS YOUR REQUIREMENTS</h2>
                        <p className="body-large" style={{ marginTop: '24px' }}>
                            Tell us about your sourcing needs and we'll show you how we can help.
                        </p>
                        <div className="cta-buttons" style={{ marginTop: '40px' }}>
                            <Link to="/contact" className="btn-primary">
                                Contact Us
                            </Link>
                            <Link to="/products" className="btn-secondary">
                                View Product Categories
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;