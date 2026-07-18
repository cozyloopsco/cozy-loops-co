// ====================================
// Cozy Loops Co.
// Main JavaScript
// ====================================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Shop Now buttons
document.querySelectorAll(".btn, .product button").forEach(button => {
    button.addEventListener("click", function () {

        alert("✨ Thank you for visiting Cozy Loops Co. Online ordering will be available soon!");

    });
});

// Fade-in animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".card, .product, .feature, .review").forEach(item => {

    item.classList.add("hidden");

    observer.observe(item);

});

// Floating Back-to-Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#dca5b8";
topButton.style.color = "white";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 10px 20px rgba(0,0,0,.15)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
// Newsletter Form
const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = this.querySelector("input").value.trim();

        if (email === "") {
            alert("Please enter your email address.");
            return;
        }

        alert("🌸 Thank you for joining the Cozy Club!");

        this.reset();
    });
}
