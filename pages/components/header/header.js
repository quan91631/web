document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.querySelector('.primary-navigation');
    const mobileBreakpoint = 1025; // Match this with CSS media query

    function updateNavigationState() {
        if (window.innerWidth >= mobileBreakpoint) {
            // Reset navigation state on desktop
            primaryNav.setAttribute('data-visible', 'true');
            navToggle.setAttribute('aria-expanded', 'true');
        } else {
            // Reset to closed state on mobile
            primaryNav.setAttribute('data-visible', 'false');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    }

    // Initial state
    updateNavigationState();

    // Toggle navigation on mobile
    navToggle.addEventListener('click', () => {
        console.log(window.innerWidth);
        if (window.innerWidth < mobileBreakpoint) {
            const visibility = primaryNav.getAttribute('data-visible');
            const isVisible = visibility === "true";
            primaryNav.setAttribute('data-visible', !isVisible);
            navToggle.setAttribute('aria-expanded', !isVisible);
        }
    });

    // Handle resize events
    window.addEventListener('resize', updateNavigationState);
});