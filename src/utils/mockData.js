// Mock data storage
let contactSubmissions = [];

// Mock API call for contact form submission
export const submitContactForm = (formData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate API call
            const submission = {
                id: Date.now(),
                ...formData,
                submittedAt: new Date().toISOString()
            };

            contactSubmissions.push(submission);
            console.log('Form submitted:', submission);
            console.log('All submissions:', contactSubmissions);

            resolve({ success: true, data: submission });
        }, 1000);
    });
};

// Get all contact submissions (for potential admin view later)
export const getContactSubmissions = () => {
    return contactSubmissions;
};