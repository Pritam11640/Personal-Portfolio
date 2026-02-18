// Preloader
window.addEventListener("load", () => {
    document.getElementById("preloader").style.display = "none";
});

// Dark Mode
document.getElementById("modeToggle").onclick = () => {
    document.body.classList.toggle("light-mode");
};

// Typing Effect
const words = ["Web Developer", "Frontend Designer", "Problem Solver"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
    const typing = document.getElementById("typing");
    if (i >= words.length) i = 0;
    current = words[i];

    if (!isDeleting) {
        typing.textContent = current.slice(0, ++j);
        if (j === current.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        typing.textContent = current.slice(0, --j);
        if (j === 0) {
            isDeleting = false;
            i++;
        }
    }
    setTimeout(type, 100);
}
document.addEventListener("DOMContentLoaded", type);

// Counter
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
    const update = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(update, 20);
        } else {
            counter.innerText = target;
        }
    };
    update();
});

// Back to Top
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Form validation
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message sent successfully!");
});
