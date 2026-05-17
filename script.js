// Global Configuration Elements Access Nodes
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// --- Feature 1: Theme State Controller ---
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    let theme = 'light';
    if (document.body.classList.contains('dark-theme')) {
        theme = 'dark';
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
    localStorage.setItem('theme', theme);
});

// --- Feature 2: Project Filter Spectrum Matrix ---
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filterValue = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            const cardTechs = card.getAttribute('data-tech').split(' ');
            if (filterValue === 'all' || cardTechs.includes(filterValue)) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
});

// --- Feature 3: Native High-Performance Scroll Reveal Framework ---
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Stops computing operations once elements render active
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(element => revealObserver.observe(element));

// --- Feature 4: Asynchronous API Form Controller ---
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    
    status.innerHTML = "Processing data delivery...";
    status.className = "";

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            status.innerHTML = "Success! Message dispatched directly to Tirth.";
            status.className = "success";
            form.reset();
        } else {
            const errorData = await response.json();
            status.innerHTML = errorData.errors ? errorData.errors.map(err => err.message).join(", ") : "Transmission fault encountered.";
            status.className = "error";
        }
    } catch (error) {
        status.innerHTML = "Network layer runtime execution timeout failure.";
        status.className = "error";
    }
});

// Mobile Layout Toggles
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});
