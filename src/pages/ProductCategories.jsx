import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ProductCategories.css';

const ProductCategories = () => {
    const categories = [
        {
            title: 'Lifestyle & Home Products',
            subtitle: 'Designed for quality, finish, and everyday use.',
            description: 'We support sourcing and coordination for lifestyle and home-use products where consistency and presentation matter. Our role is to align design, material, and production feasibility with your expectations.',
            image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80',
            items: [
                'Home décor items',
                'Lifestyle accessories',
                'Daily-use household products'
            ]
        },
        {
            title: 'Textile & Carpets',
            subtitle: 'Material precision. Consistent quality.',
            description: 'Textile and carpet products demand accuracy in material, design, and production handling. We ensure specifications and quality expectations are clearly aligned before execution.',
            image: 'https://images.unsplash.com/photo-1542044801-30d3e45ae49a?w=800&q=80',
            items: [
                'Carpets and rugs',
                'Textile-based products',
                'Material-specific requirements'
            ]
        },
        {
            title: 'Packaging Solutions',
            subtitle: 'Practical. Scalable. Reliable.',
            description: 'We assist businesses in accessing packaging solutions that meet functional, volume, and quality requirements — without trial and error.',
            image: 'https://images.unsplash.com/photo-1617825295690-28ae56c56135?w=800&q=80',
            items: [
                'Packaging materials',
                'Containers and storage solutions',
                'Commercial-use packaging items'
            ]
        },
        {
            title: 'Glass, Plastic & Household Utilities',
            subtitle: 'Built for regular use and consistency.',
            description: 'Utility-driven products require durability, consistency, and proper handling. We support structured sourcing and coordination for dependable everyday solutions.',
            image: 'https://images.unsplash.com/photo-1541698321721-c083f55816da?w=800&q=80',
            items: [
                'Glass utility items',
                'Plastic containers',
                'Household-use products'
            ]
        },
        {
            title: 'Customized Product Requests',
            subtitle: 'When standard options aren\'t enough.',
            description: 'For non-standard or specialized requirements, we provide structured evaluation and coordination — helping you assess feasibility before committing resources.',
            image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?w=800&q=80',
            items: [
                'Custom designs or materials',
                'Unique functional needs',
                'Special quantity requirements'
            ]
        }
    ];

    return (
        <div className="products-page">
            {/* Hero Section */}
            <section className="page-hero space-top-120">
                <div className="container">
                    <h1 className="heading-1">PRODUCT CATEGORIES</h1>
                    <p className="body-large" style={{ marginTop: '32px', maxWidth: '800px' }}>
                        Our network spans multiple product segments, allowing flexible and reliable support.
                    </p>
                </div>
            </section>

            {/* Categories Section */}
            <section className="section space-top-96 space-bottom-120">
                <div className="container">
                    <div className="categories-list">
                        {categories.map((category, index) => (
                            <div key={index} className="category-detail-card">
                                <div className="category-detail-image">
                                    <img src={category.image} alt={category.title} />
                                </div>
                                <div className="category-detail-content">
                                    <h2 className="heading-2">{category.title}</h2>
                                    <p className="heading-4" style={{ marginTop: '16px', color: 'var(--brand-primary)' }}>
                                        {category.subtitle}
                                    </p>
                                    <p className="body-large" style={{ marginTop: '24px' }}>
                                        {category.description}
                                    </p>
                                    <div className="category-items">
                                        <p className="body-medium" style={{ fontWeight: '600', marginBottom: '16px' }}>
                                            We support:
                                        </p>
                                        {category.items.map((item, idx) => (
                                            <div key={idx} className="category-item">
                                                <div className="item-dot"></div>
                                                <span className="body-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="body-medium" style={{ marginTop: '32px', color: 'var(--text-secondary)' }}>
                                        If this category aligns with your requirement, let's discuss next steps.
                                    </p>
                                    <Link to="/contact" className="btn-primary" style={{ marginTop: '24px' }}>
                                        Discuss Your Requirement <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section space-top-96 space-bottom-96">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="heading-2">DON'T SEE YOUR CATEGORY?</h2>
                        <p className="body-large" style={{ marginTop: '24px' }}>
                            We handle specialized and custom requirements too. Let's explore possibilities.
                        </p>
                        <div className="cta-buttons" style={{ marginTop: '40px' }}>
                            <Link to="/contact" className="btn-primary">
                                Share Your Requirement
                            </Link>
                            <Link to="/services" className="btn-secondary">
                                View All Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductCategories;