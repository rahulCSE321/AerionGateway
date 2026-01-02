import React, { useState } from 'react';
import { Mail, Phone, Clock } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { Toaster } from '../components/ui/sonner';
import { toast } from 'sonner';
import { submitContactForm } from '../utils/mockData';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        productRequirement: '',
        quantity: '',
        additionalNotes: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Mock API call
            const result = await submitContactForm(formData);

            toast.success('Message sent successfully!', {
                description: 'We\'ll get back to you within 24 hours.',
                duration: 4000
            });

            // Reset form
            setFormData({
                name: '',
                companyName: '',
                email: '',
                phone: '',
                productRequirement: '',
                quantity: '',
                additionalNotes: ''
            });
        } catch (error) {
            toast.error('Failed to send message', {
                description: 'Please try again later.',
                duration: 4000
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page">
            <Toaster position="top-right" />

            {/* Hero Section */}
            <section className="page-hero space-top-120">
                <div className="container">
                    <h1 className="heading-1">CONTACT US</h1>
                    <p className="body-large" style={{ marginTop: '32px', maxWidth: '800px' }}>
                        Tell us what you need — we'll handle the coordination.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section space-top-96 space-bottom-120">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2 className="heading-3">GET IN TOUCH</h2>
                            <p className="body-medium" style={{ marginTop: '24px', color: 'var(--text-secondary)' }}>
                                Ready to experience professional sourcing coordination? Reach out and let's discuss your requirements.
                            </p>

                            <div className="contact-details">
                                <div className="contact-detail-item">
                                    <div className="detail-icon">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="caption">Email</p>
                                        <a href="mailto:info@aerionexcellence.com" className="body-medium">
                                            info@aerionexcellence.com
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-detail-item">
                                    <div className="detail-icon">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="caption">Phone</p>
                                        <p className="body-medium">+91 XXXXX XXXXX</p>
                                    </div>
                                </div>

                                <div className="contact-detail-item">
                                    <div className="detail-icon">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <p className="caption">Business Hours</p>
                                        <p className="body-medium">Monday – Saturday</p>
                                        <p className="body-small">10:00 AM – 7:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="companyName" className="form-label">Company Name *</label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                        placeholder="Your company"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone" className="form-label">Phone *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>

                                <div className="form-group form-group-full">
                                    <label htmlFor="productRequirement" className="form-label">Product Requirement *</label>
                                    <textarea
                                        id="productRequirement"
                                        name="productRequirement"
                                        value={formData.productRequirement}
                                        onChange={handleChange}
                                        required
                                        className="form-textarea"
                                        rows="4"
                                        placeholder="Describe your product requirements..."
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="quantity" className="form-label">Quantity (Approx.) *</label>
                                    <input
                                        type="text"
                                        id="quantity"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                        placeholder="e.g., 500 units"
                                    />
                                </div>

                                <div className="form-group form-group-full">
                                    <label htmlFor="additionalNotes" className="form-label">Additional Notes</label>
                                    <textarea
                                        id="additionalNotes"
                                        name="additionalNotes"
                                        value={formData.additionalNotes}
                                        onChange={handleChange}
                                        className="form-textarea"
                                        rows="3"
                                        placeholder="Any additional information..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary"
                                    disabled={isSubmitting}
                                    style={{ width: '100%', gridColumn: '1 / -1' }}
                                >
                                    {isSubmitting ? 'Sending...' : 'Submit Requirements'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;