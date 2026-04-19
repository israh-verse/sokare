document.addEventListener('DOMContentLoaded', () => {

    // --- DROPDOWN MENU TOGGLE ---
    const menuBtn = document.getElementById('menuBtn');
    const dropdownNav = document.getElementById('dropdownNav');

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownNav.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdownNav.contains(e.target) && e.target !== menuBtn) {
            dropdownNav.classList.remove('active');
        }
    });

    // Close dropdown after selecting a link and handle smooth scrolling
    document.querySelectorAll('.glass-dropdown a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            dropdownNav.classList.remove('active');
        });
    });





    // --- SCROLL ANIMATIONS (Intersection Observer) ---
    const sections = document.querySelectorAll('.fade-in-section');

    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Unobserve to run animation only once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});

// --- BASIC SECURITY DETERRENTS ---
// Disable Right-Click Context Menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Disable Common Developer Tools Keyboard Shortcuts
document.addEventListener('keydown', function(e) {
    // Disable F12
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
    }
    // Disable Ctrl+Shift+I (Inspect)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) {
        e.preventDefault();
    }
    // Disable Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
        e.preventDefault();
    }
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
        e.preventDefault();
    }
    // Disable Ctrl+Shift+C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) {
        e.preventDefault();
    }
});
