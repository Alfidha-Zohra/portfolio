// Cursor Glow
const glow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// Typewriter
const textElement = document.getElementById('typewriter');
const roles = ["FRONT-END SYSTEMS", "GAME DEVELOPMENT", "DATA ANALYSIS"];
let rIdx = 0, cIdx = 0, isDel = false;

function type() {
    const curr = roles[rIdx];
    textElement.textContent = isDel ? curr.substring(0, cIdx--) : curr.substring(0, cIdx++);
    let speed = isDel ? 50 : 150;
    if (!isDel && cIdx > curr.length) { speed = 2000; isDel = true; }
    else if (isDel && cIdx < 0) { isDel = false; rIdx = (rIdx + 1) % roles.length; speed = 500; cIdx = 0; }
    setTimeout(type, speed);
}

// Reveal logic
const obs = new IntersectionObserver((es) => {
    es.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    type();
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
});







const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));







const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    // Show button after scrolling down 400px
    if (window.scrollY > 400) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const menu = document.querySelector('#mobile-menu');
const navList = document.querySelector('#nav-list');

// Toggle Menu
menu.addEventListener('click', () => {
    navList.classList.toggle('active');
    
    // Optional: Animate hamburger into an 'X'
    menu.classList.toggle('is-active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    navList.classList.remove('active');
}));








function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const emailP = document.getElementById('email-text');
        const originalText = emailP.innerText;
        
        emailP.innerText = "Copied to Clipboard!";
        emailP.style.color = "var(--accent)";
        
        setTimeout(() => {
            emailP.innerText = originalText;
            emailP.style.color = "var(--text-dim)";
        }, 2000);
    });
}