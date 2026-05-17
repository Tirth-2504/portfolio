// --- All previous JS features (Theme, Filters, Intersections, Form Handler) remain unchanged here ---

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
            observer.unobserve(entry.target);
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

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});


// --- NEW FEATURE 5: Recruiter Console Matrix Logic ---
try {
    console.clear();
    console.log(
        "%c👋 Hello Engineering Recruiter / Technical Inspector!", 
        "background: #2563eb; color: #ffffff; font-size: 16px; font-weight: bold; padding: 8px 12px; border-radius: 4px;"
    );
    console.log(
        "%cThank you for inspecting my portfolio code base. I specialize in building high-throughput backend distribution layers, real-time socket clusters, and performance-optimized web architectures.", 
        "color: #334155; font-size: 13px; font-weight: 500; line-height: 1.5; margin: 8px 0;"
    );
    console.log(
        "%c🎯 Open Roles Target: Full-Stack Engineering, Backend Systems Developer, Cloud Applications Architect.",
        "color: #06b6d4; font-size: 13px; font-weight: bold;"
    );
    console.log(
        "%c📧 Drop an email straight to: tirth7411@gmail.com",
        "color: #2563eb; font-size: 12px; font-style: italic; text-decoration: underline;"
    );
} catch (e) {
    // Gracefully handle older client browsers lacking styled console support rules
}
