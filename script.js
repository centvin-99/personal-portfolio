/* ============================================================
   script.js — Vincent's Portfolio JavaScript
   Sections (in order):
   1. Hamburger Toggle Menu
   2. Smooth Scrolling
   3. Projects Marquee (Pause on Hover / Touch)
   4. Contact Form Submission
============================================================ */


/* ============================================================
   1. HAMBURGER TOGGLE MENU
   On mobile, clicking the hamburger button shows/hides the
   nav menu and animates the icon into an X shape.
============================================================ */

// Select the hamburger button and nav menu from the HTML
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');

// Toggle the 'open' class on both elements when the button is clicked.
// CSS handles the visual changes (X animation + menu visible/hidden).
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});

// Close the mobile menu automatically when any nav link is clicked.
// This prevents the menu from staying open after navigating to a section.
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
  });
});


/* ============================================================
   2. SMOOTH SCROLLING
   Instead of jumping instantly to a section, the page scrolls
   smoothly when a nav link or the CTA button is clicked.
============================================================ */

// Select all nav links AND the "Contact Me" hero button
const scrollLinks = document.querySelectorAll('.nav-link, .cta-button');

scrollLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Stop the browser's default instant jump

    // Get the target section ID from the href (e.g. "#about" → "about")
    const targetID = link.getAttribute('href').substring(1);

    // Find the matching section element in the HTML
    const targetSection = document.getElementById(targetID);

    // If the section exists, scroll to it smoothly
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


/* ============================================================
   3. PROJECTS MARQUEE — Pause on Hover / Touch
   The marquee scrolls automatically via CSS animation.
   These JS listeners pause it when the user interacts with it,
   so they have time to read the project cards.
============================================================ */

const track = document.querySelector('.projects-track');

// Pause animation when mouse enters the track
track.addEventListener('mouseenter', () => {
  track.style.animationPlayState = 'paused';
});

// Resume animation when mouse leaves the track
track.addEventListener('mouseleave', () => {
  track.style.animationPlayState = 'running';
});

// Pause on touch (for mobile/tablet users)
track.addEventListener('touchstart', () => {
  track.style.animationPlayState = 'paused';
});

// Resume when finger is lifted
track.addEventListener('touchend', () => {
  track.style.animationPlayState = 'running';
});


/* ============================================================
   4. CONTACT FORM SUBMISSION
   Prevents the page from reloading when the form is submitted.
   Instead, it shows a success message below the form and clears
   the input fields.
============================================================ */

const form            = document.querySelector('.contact-form');
const feedbackMessage = document.getElementById('contact-feedback');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop the default form POST and page reload

  // Show the success message (hidden by default in CSS)
  feedbackMessage.style.display = 'block';

  // Clear all form fields so they're ready for a new message
  form.reset();
});
