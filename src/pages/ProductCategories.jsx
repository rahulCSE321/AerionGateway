import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../utils/products';
import './ProductCategories.css';

const ProductCategories = () => {


    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const selectedCategory = searchParams.get('category');

    const filteredCategories = selectedCategory
        ? categories.filter(cat => cat.title === selectedCategory)
        : categories;

    return (
        <div className="products-page">
            {/* Hero Section */}
            <section className="page-hero space-top-120">
                <div className="container">
                    <h1 className="heading-1">PRODUCT CATEGORIES</h1>
                    <p className="body-large" style={{ marginTop: '32px', maxWidth: '800px' }}>
                        Our network spans multiple product segments, allowing flexible and reliable support.
                    </p>
                    {selectedCategory && (
                        <div style={{ marginTop: '24px' }}>
                            <Link to="/products" className="btn-secondary">
                                Show All Categories
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Categories Section */}
            <section className="section space-top-96 space-bottom-120">
                <div className="container">
                    <div className="categories-list">
                        {filteredCategories.map((category, index) => (
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