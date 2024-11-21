document.addEventListener("DOMContentLoaded", () => {
    const destaqueItems = document.querySelectorAll(".destaque-item");
    const menu = document.querySelector(".menu");

    destaqueItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.1)";
            item.style.transition = "transform 0.3s ease";
        });

        item.addEventListener("mouseout", () => {
            item.style.transform = "scale(1)";
        });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            menu.style.backgroundColor = "#02111B"; 
            menu.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)"; 
        } else {
            menu.style.backgroundColor = "#000000";
            menu.style.boxShadow = "none"; 
        }
    });
});