// Typewriter effect for name
const nameElement = document.querySelector('h1');
const nameText = 'Jessie Yeung';
let index = 0;

function typeWriter() {
    if (index < nameText.length) {
        nameElement.innerHTML += nameText.charAt(index);
        index++;
        setTimeout(typeWriter, 150);
    }
}

window.addEventListener('load', () => {
    nameElement.innerHTML = ''; // Clear initial text
    typeWriter();
});

// Toggle job details
function toggleJob(header) {
    const details = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');
    const isOpen = details.style.display === 'block';

    // Close all other details
    document.querySelectorAll('.job-details').forEach(d => d.style.display = 'none');
    document.querySelectorAll('.arrow').forEach(a => a.textContent = '▼');

    if (!isOpen) {
        details.style.display = 'block';
        arrow.textContent = '▲';
    }
}
