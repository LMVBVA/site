document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section");

    

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

/*====================================
COMPTEURS ANIMÉS
====================================*/

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = Number(counter.dataset.target);

            let current = 0;

            const step = Math.max(1, Math.ceil(target / 60));

            const timer = setInterval(() => {

                current += step;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent = current;

            }, 20);

            observer.unobserve(counter);

        });

    }, {

        threshold:0.4

    });

    counters.forEach(counter => observer.observe(counter));

});