// Додаємо функціональність для перемикача теми
document.getElementById("theme-toggle").addEventListener("change", function () {
    document.body.classList.toggle("dark-theme", this.checked);
});
