import emailjs from '@emailjs/browser';

// Replace these values with your own
const serviceID = 'your_service_id';
const templateID = 'your_template_id';
const userID = 'your_user_id';

const form = document.querySelector('#my-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  emailjs.sendForm(serviceID, templateID, form, userID)
   .then(() => {
      console.log('Email sent successfully!');
    }, (error) => {
      console.error('Error sending email:', error);
    });
});

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
