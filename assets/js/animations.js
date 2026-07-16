document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section");

    console.log(sections.length);

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(section => {

        section.classList.add("fade-section");
        observer.observe(section);

    });

});