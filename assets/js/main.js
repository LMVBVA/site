document.addEventListener("DOMContentLoaded", () => {
	

    const button = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".nav-menu");

    if (!button || !menu) return;

    function closeMenu() {
        menu.classList.remove("active");
        button.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    }

    button.addEventListener("click", (e) => {

        e.preventDefault();
        e.stopPropagation();

        const open = menu.classList.toggle("active");

        button.setAttribute("aria-expanded", open);
        document.body.classList.toggle("menu-open", open);

    });

    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".main-nav")) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

});