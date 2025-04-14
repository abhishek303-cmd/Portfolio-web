// Hamburger Menu Toggle
function toggleMenu() {
    const nav = document.querySelector(".nav");
    const hamburger = document.querySelector(".hamburger");
    nav.classList.toggle("active");
    hamburger.classList.toggle("open");
}

// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior

        const targetId = link.getAttribute('href').substring(1); // Get target section ID
        const targetSection = document.getElementById(targetId);

        // Scroll smoothly to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Close the navbar after clicking a link (for mobile)
        const nav = document.querySelector(".nav");
        const hamburger = document.querySelector(".hamburger");
        nav.classList.remove("active");
        hamburger.classList.remove("open");
    });
});
