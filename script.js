function toggleJob(header) {
    const details = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');
    const isOpen = details.style.display === 'block';

    document.querySelectorAll('.job-details').forEach(d => d.style.display = 'none');
    document.querySelectorAll('.arrow').forEach(a => a.textContent = '▼');

    if (!isOpen) {
        details.style.display = 'block';
        arrow.textContent = '▲';
    }

    header.setAttribute('aria-expanded', String(!isOpen));
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.navbar a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.parentElement.classList.add('active');
        link.setAttribute('aria-current', 'page');
    }
});

document.querySelectorAll('.job-header').forEach(header => {
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    header.setAttribute('aria-expanded', 'false');
    header.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleJob(header);
            header.setAttribute('aria-expanded', header.nextElementSibling.style.display === 'block');
        }
    });
});

const animatedElements = document.querySelectorAll(
    '#home > .header-container, #home .About, .resume-section, .job, .project-box, .certificate-box, .contact-box'
);

animatedElements.forEach(element => element.classList.add('reveal'));

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    animatedElements.forEach((element, index) => {
        element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
        observer.observe(element);
    });
} else {
    animatedElements.forEach(element => element.classList.add('visible'));
}
