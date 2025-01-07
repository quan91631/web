document.addEventListener('DOMContentLoaded', function() {
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
    const mobileBreakpoint = 768; // Match this with CSS media query
    
    dropdownTriggers.forEach(trigger => {
        // Initially collapse all lists on mobile
        if (window.innerWidth < mobileBreakpoint) {
            trigger.nextElementSibling.classList.add('collapsed');
        }

        trigger.addEventListener('click', function() {
            // Only handle clicks on mobile
            if (window.innerWidth < mobileBreakpoint) {
                // Toggle active class on the trigger
                this.classList.toggle('active');
                
                // Find the next sibling (footer-list) and toggle its classes
                const footerList = this.nextElementSibling;
                footerList.classList.toggle('collapsed');
                footerList.classList.toggle('expanded');
            }
        });
    });

    // Handle resize events
    window.addEventListener('resize', function() {
        if (window.innerWidth >= mobileBreakpoint) {
            // Remove all collapsed/expanded classes on desktop
            document.querySelectorAll('.footer-list').forEach(list => {
                list.classList.remove('collapsed', 'expanded');
            });
            document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
                trigger.classList.remove('active');
            });
        } else {
            // Collapse all lists on mobile
            document.querySelectorAll('.footer-list').forEach(list => {
                list.classList.add('collapsed');
                list.classList.remove('expanded');
            });
            document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
                trigger.classList.remove('active');
            });
        }
    });
}); 