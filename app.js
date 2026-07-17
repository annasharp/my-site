// Wait for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
     // ==========================================================================
    // 0. MOBILE NAV TOGGLE (hamburger menu)
    // ==========================================================================
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('is-open');
            navToggle.classList.toggle('is-active', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('is-open');
                navToggle.classList.remove('is-active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ==========================================================================
    // 1. SIMPLE NEWSLETTER FORM SUBMISSION
    // ==========================================================================
    const newsletterForm = document.querySelector('.simple-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Stop the page from reloading
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const emailValue = emailInput.value.trim();
            
            // For demo: Show a basic alert message
            alert(`Success! You have subscribed with: ${emailValue}`);
            
            // Clear the input field
            emailInput.value = '';
        });
    }

    // ==========================================================================
    // 2. SIMPLE CONTACT FORM SUBMISSION
    // ==========================================================================
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Stop the page from reloading
            
            const inputs = contactForm.querySelectorAll('input');
            const message = contactForm.querySelector('textarea').value.trim();
            const name = inputs[0].value.trim();
            const email = inputs[1].value.trim();
            
            // For demo: Show a basic alert message
            alert(`Thank you, ${name}! Your message has been sent.\n\nEmail: ${email}\nMessage: ${message}`);
            
            // Clear all form inputs
            contactForm.reset();
        });
    }
});
