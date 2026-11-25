
console.log("Welcome to the Student Portal!");

// Navigation click interaction
document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", function() {
        document.querySelectorAll(".sidebar a").forEach(item => {
            item.style.background = "";
        });

        this.style.background = "#3b82f6";
    });
});

// Display current year in footer
const footer = document.querySelector("footer p");

footer.textContent = footer.textContent.replace(
    "2026",
    new Date().getFullYear()
);