/* =========================
   HERO RANDOM FLIPPING
========================= */

const heroImages =
    document.querySelectorAll(".flip-image");

const heroCurrent =
    document.getElementById("heroCurrent");

let currentHero = 0;


function changeHeroImage() {

    if (heroImages.length <= 1) return;

    heroImages[currentHero]
        .classList
        .remove("active");

    let nextHero;

    do {

        nextHero =
            Math.floor(
                Math.random() *
                heroImages.length
            );

    } while (
        nextHero === currentHero
    );

    currentHero = nextHero;

    heroImages[currentHero]
        .classList
        .add("active");

    heroCurrent.textContent =
        String(currentHero + 1)
            .padStart(2, "0");
}


function randomHeroInterval() {

    const randomTime =
        Math.floor(
            Math.random() * 1000
        ) + 1000;

    setTimeout(() => {

        changeHeroImage();

        randomHeroInterval();

    }, randomTime);
}


randomHeroInterval();


/* =========================
   MAIN PROJECT SLIDER
========================= */

const slider =
    document.querySelector(".projects-slider");

const nextButton =
    document.getElementById("nextProject");

const previousButton =
    document.getElementById("previousProject");

const progress =
    document.getElementById("sliderProgress");


nextButton.addEventListener(
    "click",
    () => {

        slider.scrollBy({

            left:
                slider.clientWidth * 0.7,

            behavior: "smooth"

        });

    }
);


previousButton.addEventListener(
    "click",
    () => {

        slider.scrollBy({

            left:
                -slider.clientWidth * 0.7,

            behavior: "smooth"

        });

    }
);


slider.addEventListener(
    "scroll",
    () => {

        const maxScroll =
            slider.scrollWidth -
            slider.clientWidth;

        if (maxScroll <= 0) return;

        const percentage =
            (
                slider.scrollLeft /
                maxScroll
            ) * 100;

        progress.style.width =
            `${Math.max(
                25,
                percentage
            )}%`;

    }
);


/* =========================
   PROJECT DATA
========================= */

/* =========================
   PROJECT DATA — IN ORDER
========================= */

const projects = {
     project1: {
        name: "Meriland",
        images: [
            "images/meriland flat/1.jpeg",
            "images/meriland flat/2.jpeg",
            "images/meriland flat/3.jpeg",
            "images/meriland flat/4.jpeg",
            "images/meriland flat/5.jpeg",
            "images/meriland flat/6.jpeg",
            "images/meriland flat/7.jpeg",
            "images/meriland flat/8.jpeg",
            "images/meriland flat/9.jpeg",
            "images/meriland flat/10.jpeg",
            "images/meriland flat/11.jpeg",
            "images/meriland flat/12.jpeg",
            "images/meriland flat/13.jpeg",
            "images/meriland flat/14.jpeg",
            "images/meriland flat/15.jpeg",
            "images/meriland flat/16.jpeg",
            "images/meriland flat/17.jpeg",
            "images/meriland flat/18.jpeg",
            "images/meriland flat/19.jpeg"
        ]
    },

    project2: {
        name: "EL3asema",
        images: [
            "images/rafco flat العاصمه/1.png",
            "images/rafco flat العاصمه/2.png",
            "images/rafco flat العاصمه/3.png",
            "images/rafco flat العاصمه/4.png",
            "images/rafco flat العاصمه/5.png",
            "images/rafco flat العاصمه/6.png",
            "images/rafco flat العاصمه/7.png",
            "images/rafco flat العاصمه/8.png"
        ]
    },
    project3: {
        name: "VILLA THREE",
        images: [
            "images/villa sodic alsherouk/1.jpg",
            "images/villa sodic alsherouk/2.jpg",
            "images/villa sodic alsherouk/3.jpg",
            "images/villa sodic alsherouk/4.jpg",
            "images/villa sodic alsherouk/5.jpg",
            "images/villa sodic alsherouk/6.jpg",
            "images/villa sodic alsherouk/7.jpg",
            "images/villa sodic alsherouk/8.png",
            "images/villa sodic alsherouk/9.png",
            "images/villa sodic alsherouk/10.jpg",
            "images/villa sodic alsherouk/11.png",
            "images/villa sodic alsherouk/12.jpeg",
            "images/villa sodic alsherouk/13.jpeg"
        ]
    },

    project4: {
        name: "VILLA FOUR",
        images: [
            "images/villa uptown/1.jpg",
            "images/villa uptown/2.jpg",
            "images/villa uptown/3.jpg",
            "images/villa uptown/4.jpg",
            "images/villa uptown/5.jpg",
            "images/villa uptown/6.jpg",
            "images/villa uptown/7.jpg",
            "images/villa uptown/8.jpg",
            "images/villa uptown/9.jpeg",
            "images/villa uptown/10.jpeg",
            "images/villa uptown/11.jpeg",
            "images/villa uptown/12.jpeg",
            "images/villa uptown/13.jpeg",
            "images/villa uptown/14.jpeg"
        ]
    },

    project5: {
        name: "RESIDENCE FIVE",
        images: [
            "images/lavista villa/1.jpg",
            "images/lavista villa/2.jpg",
            "images/lavista villa/3.jpg",
            "images/lavista villa/4.jpg",
            "images/lavista villa/5.jpg",
            "images/lavista villa/6.jpg",
            "images/lavista villa/7.jpg",
            "images/lavista villa/8.jpg",
            "images/lavista villa/9.jpg",
            "images/lavista villa/10.jpg",
            "images/lavista villa/11.jpg",
            "images/lavista villa/12.jpg",
            "images/lavista villa/13.jpg",
            "images/lavista villa/14.jpg",
            "images/lavista villa/15.jpg",
            "images/lavista villa/16.jpg",
            "images/lavista villa/17.jpg"
        ]
    },

    project6: {
        name: "VILLA SIX",
        images: [
            "images/madinaty flat B3/1.jpeg",
            "images/madinaty flat B3/2.png",
            "images/madinaty flat B3/3.jpeg",
            "images/madinaty flat B3/4.png",
            "images/madinaty flat B3/5.png",
            "images/madinaty flat B3/6.png",
            "images/madinaty flat B3/7.png",
            "images/madinaty flat B3/8.png",
            "images/madinaty flat B3/9.png",
            "images/madinaty flat B3/10.png",
            "images/madinaty flat B3/11.png"
        ]
    },



    project7: {
        name: "VILLA SEVEN",
        images: [
            "images/twinvilla hydepark/1.jpg",
            "images/twinvilla hydepark/2.jpg",
            "images/twinvilla hydepark/3.jpg",
            "images/twinvilla hydepark/4.jpg",
            "images/twinvilla hydepark/5.jpg",
            "images/twinvilla hydepark/6.jpg",
            "images/twinvilla hydepark/7.jpg",
            "images/twinvilla hydepark/8.jpg",
            "images/twinvilla hydepark/9.jpg",
            "images/twinvilla hydepark/10.jpg",
            "images/twinvilla hydepark/11.jpg",
            "images/twinvilla hydepark/12.jpg",
            "images/twinvilla hydepark/13.jpg",
            "images/twinvilla hydepark/14.jpg",
            "images/twinvilla hydepark/15.jpg",
            "images/twinvilla hydepark/16.jpg",
            "images/twinvilla hydepark/17.jpg",
            "images/twinvilla hydepark/18.jpg",
            "images/twinvilla hydepark/19.jpg",
            "images/twinvilla hydepark/20.jpg",
            "images/twinvilla hydepark/21.jpg",
            "images/twinvilla hydepark/22.jpg",
            "images/twinvilla hydepark/23.jpg",
            "images/twinvilla hydepark/24jpg",
            "images/twinvilla hydepark/25.jpg",
            "images/twinvilla hydepark/26.jpg",
            "images/twinvilla hydepark/27.jpg"
        ]
    },

    project8: {
        name: "VILLA EIGHT",
        images: [
            "images/azad flat/1.jpg",
            "images/azad flat/2.jpg",
            "images/azad flat/3.jpg",
            "images/azad flat/4.jpg",
            "images/azad flat/5.jpg",
            "images/azad flat/6.jpg",
            "images/azad flat/7.jpg",
            "images/azad flat/8.jpg",
            "images/azad flat/9.jpg",
            "images/azad flat/10.jpg",
            "images/azad flat/11.png",
            "images/azad flat/12.png",
            "images/azad flat/13.png",
            "images/azad flat/14.jpeg",
            "images/azad flat/15.jpeg",
            "images/azad flat/16.jpeg",
            "images/azad flat/17.jpeg",
            "images/azad flat/18.jpeg",
            "images/azad flat/19.jpeg"
        ]
    },

    project9: {
        name: "VILLA NINE",
        images: [
            "images/duplex azad/1.png",
            "images/duplex azad/2.png",
            "images/duplex azad/3.png",
            "images/duplex azad/4.png",
            "images/duplex azad/5.png",
            "images/duplex azad/6.png",
            "images/duplex azad/7.png",
            "images/duplex azad/8.png",
            "images/duplex azad/9.png",
            "images/duplex azad/10.png",
            "images/duplex azad/11.png",
            "images/duplex azad/12.png",
            "images/duplex azad/13.png"
        ]
    },

    project10: {
        name: "VILLA TEN",
        images: [
            "images/madinaty g20/1.jpg",
            "images/madinaty g20/2.jpg",
            "images/madinaty g20/3.jpg",
            "images/madinaty g20/4.jpg",
            "images/madinaty g20/5.jpg",
            "images/madinaty g20/6.jpg",
            "images/madinaty g20/7.jpg",
            "images/madinaty g20/8.jpg",
            "images/madinaty g20/9.jpg",
            "images/madinaty g20/10.jpg",
            "images/madinaty g20/11.jpg"
        ]
    },

    project11: {
        name: "VILLA ELEVEN",
        images: [
            "images/madinaty g21/1.jpg",
            "images/madinaty g21/2.jpg",
            "images/madinaty g21/3.jpg",
            "images/madinaty g21/4.jpg",
            "images/madinaty g21/5.jpg",
            "images/madinaty g21/6.jpg",
            "images/madinaty g21/7.jpg",
            "images/madinaty g21/8.jpg",
            "images/madinaty g21/9.jpg",
            "images/madinaty g21/10.jpg"
        ]
    },

   

    project12: {
        name: "VILLA TWELVE",
        images: [
            "images/sodic east duplex 238/1.jpg",
            "images/sodic east duplex 238/2.jpg",
            "images/sodic east duplex 238/3.jpg",
            "images/sodic east duplex 238/4.jpg",
            "images/sodic east duplex 238/5.jpg",
            "images/sodic east duplex 238/6.jpg",
            "images/sodic east duplex 238/7.jpg",
            "images/sodic east duplex 238/8.jpg",
            "images/sodic east duplex 238/9.jpg",
            "images/sodic east duplex 238/10.jpg"
        ]
    },

    project13: {
        name: "VILLA THIRTEEN",
        images: [
            "images/villa alhadaba october/1.jpeg",
            "images/villa alhadaba october/2.jpeg",
            "images/villa alhadaba october/3.jpeg",
            "images/villa alhadaba october/4.jpeg",
            "images/villa alhadaba october/5.jpeg",
            "images/villa alhadaba october/6.jpeg",
            "images/villa alhadaba october/7.jpeg",
            "images/villa alhadaba october/8.jpeg",
            "images/villa alhadaba october/9.jpeg",
            "images/villa alhadaba october/10.jpeg",
            "images/villa alhadaba october/11.jpeg",
            "images/villa alhadaba october/12.jpeg",
            "images/villa alhadaba october/13.jpeg",
            "images/villa alhadaba october/14.jpeg",
            "images/villa alhadaba october/15.jpeg",
            "images/villa alhadaba october/16.jpeg",
            "images/villa alhadaba october/17.jpeg",
            "images/villa alhadaba october/18.jpeg",
            "images/villa alhadaba october/19.jpeg",
            "images/villa alhadaba october/20.jpeg",
            "images/villa alhadaba october/21.jpeg",
            "images/villa alhadaba october/22.jpeg",
            "images/villa alhadaba october/23.jpeg",
            "images/villa alhadaba october/24.jpeg",
            "images/villa alhadaba october/25.jpeg",
            "images/villa alhadaba october/26.jpeg",
            "images/villa alhadaba october/27.jpeg",
            "images/villa alhadaba october/28.jpeg",
            "images/villa alhadaba october/29.jpeg"
        ]
    },

    project14: {
        name: "VILLA FOURTEEN",
        images: [
            "images/villa lavista 160B/1.jpg",
            "images/villa lavista 160B/2.jpg",
            "images/villa lavista 160B/3.jpg",
            "images/villa lavista 160B/4.jpg",
            "images/villa lavista 160B/5.jpg",
            "images/villa lavista 160B/6.jpg",
            "images/villa lavista 160B/7.jpg",
            "images/villa lavista 160B/8.jpg",
            "images/villa lavista 160B/9.jpg",
            "images/villa lavista 160B/10.jpg",
            "images/villa lavista 160B/11.jpg",
            "images/villa lavista 160B/12.jpg",
            "images/villa lavista 160B/13.jpg"
        ]
    },

    project15: {
        name: "VILLA FIFTEEN",
        images: [
            "images/villa october/1.jpeg",
            "images/villa october/2.jpeg",
            "images/villa october/3.jpeg",
            "images/villa october/4.jpeg",
            "images/villa october/5.jpeg",
            "images/villa october/6.jpeg",
            "images/villa october/7.jpeg",
            "images/villa october/8.jpeg",
            "images/villa october/9.jpeg",
            "images/villa october/10.jpeg",
            "images/villa october/11.jpeg",
            "images/villa october/12.jpeg",
            "images/villa october/13.jpeg",
            "images/villa october/14.jpeg",
            "images/villa october/15.jpeg",
            "images/villa october/16.jpeg",
            "images/villa october/17.jpeg",
            "images/villa october/18.jpeg"
        ]
    },

    project16: {
        name: "VILLA SIXTEEN",
        images: [
            "images/villa south academy/1.jpeg",
            "images/villa south academy/2.jpeg",
            "images/villa south academy/3.jpeg",
            "images/villa south academy/4.jpeg",
            "images/villa south academy/5.jpeg",
            "images/villa south academy/6.jpeg",
            "images/villa south academy/7.jpeg",
            "images/villa south academy/8.jpeg",
            "images/villa south academy/9.jpeg",
            "images/villa south academy/10.jpeg",
            "images/villa south academy/11.jpeg",
            "images/villa south academy/12.jpeg",
            "images/villa south academy/13.jpeg",
            "images/villa south academy/14.jpeg",
            "images/villa south academy/15.jpeg",
            "images/villa south academy/16.jpeg",
            "images/villa south academy/17.jpeg",
            "images/villa south academy/18.jpeg"
        ]
    },
        project17: {
        name: "VILLA SEVENTEEN",
        images: [
            "images/villa sodic zayed/1.jpg",
            "images/villa sodic zayed/2.jpg",
            "images/villa sodic zayed/3.jpg",
            "images/villa sodic zayed/4.jpg",
            "images/villa sodic zayed/5.jpg",
            "images/villa sodic zayed/6.jpg",
            "images/villa sodic zayed/7.jpg",
            "images/villa sodic zayed/8.jpg",
            "images/villa sodic zayed/9.jpg"
        ]
    }
};


/* =========================
   PROJECT MODAL
========================= */

const modal =
    document.getElementById("projectModal");

const closeModal =
    document.getElementById("closeModal");

const modalName =
    document.getElementById("modalProjectName");

const modalImage =
    document.getElementById("modalProjectImage");

const modalPrevious =
    document.getElementById("modalPrevious");

const modalNext =
    document.getElementById("modalNext");

const modalImageNumber =
    document.getElementById("modalImageNumber");

const modalImageTotal =
    document.getElementById("modalImageTotal");

const projectCards =
    document.querySelectorAll(".project-card");


let currentProject = null;

let currentImage = 0;


/* =========================
   SHOW PROJECT IMAGE
========================= */

function showProjectImage() {

    if (!currentProject) return;

    const images =
        currentProject.images;

    modalImage.style.opacity = "0";

    setTimeout(() => {

        modalImage.src =
            images[currentImage];

        modalImage.alt =
            currentProject.name;

        modalImageNumber.textContent =
            String(currentImage + 1)
                .padStart(2, "0");

        modalImageTotal.textContent =
            String(images.length)
                .padStart(2, "0");

        modalImage.style.opacity = "1";

    }, 150);
}


/* =========================
   OPEN PROJECT
========================= */

function openProject(projectID) {

    const project =
        projects[projectID];

    if (!project) return;

    currentProject = project;

    currentImage = 0;

    modalName.textContent =
        project.name;

    modal.classList.add("open");

    document.body.style.overflow =
        "hidden";

    showProjectImage();
}


/* =========================
   VIEW PROJECT BUTTONS
========================= */

projectCards.forEach(card => {

    const button =
        card.querySelector(".view-project");

    button.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            openProject(
                card.dataset.project
            );

        }
    );

});


/* =========================
   NEXT PROJECT IMAGE
========================= */

modalNext.addEventListener(
    "click",
    () => {

        if (!currentProject) return;

        currentImage++;

        if (
            currentImage >=
            currentProject.images.length
        ) {

            currentImage = 0;

        }

        showProjectImage();

    }
);


/* =========================
   PREVIOUS PROJECT IMAGE
========================= */

modalPrevious.addEventListener(
    "click",
    () => {

        if (!currentProject) return;

        currentImage--;

        if (currentImage < 0) {

            currentImage =
                currentProject.images.length - 1;

        }

        showProjectImage();

    }
);


/* =========================
   CLOSE MODAL
========================= */

function closeProjectModal() {

    modal.classList.remove("open");

    document.body.style.overflow = "";

    currentProject = null;

}


closeModal.addEventListener(
    "click",
    closeProjectModal
);


/* =========================
   KEYBOARD CONTROLS
========================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            !modal.classList.contains("open")
        ) {
            return;
        }


        if (event.key === "Escape") {

            closeProjectModal();

        }


        if (event.key === "ArrowRight") {

            modalNext.click();

        }


        if (event.key === "ArrowLeft") {

            modalPrevious.click();

        }

    }
);


/* =========================
   DRAG MAIN PROJECT SLIDER
========================= */

let isDragging = false;

let startX = 0;

let scrollStart = 0;


slider.addEventListener(
    "mousedown",
    event => {

        isDragging = true;

        slider.style.cursor =
            "grabbing";

        startX =
            event.pageX -
            slider.offsetLeft;

        scrollStart =
            slider.scrollLeft;

    }
);


slider.addEventListener(
    "mouseleave",
    () => {

        isDragging = false;

        slider.style.cursor =
            "grab";

    }
);


slider.addEventListener(
    "mouseup",
    () => {

        isDragging = false;

        slider.style.cursor =
            "grab";

    }
);


slider.addEventListener(
    "mousemove",
    event => {

        if (!isDragging) return;

        event.preventDefault();

        const x =
            event.pageX -
            slider.offsetLeft;

        const distance =
            (x - startX) * 1.5;

        slider.scrollLeft =
            scrollStart - distance;

    }
);

/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".section-header > div, " +
    ".achievements h2, " +
    ".process-heading, " +
    ".contact-left h2, " +
    ".project-card, " +
    ".achievement, " +
    ".process-card"
);

const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;

                // Small stagger for cards
                const siblings = Array.from(
                    element.parentElement.children
                );

                const index = siblings.indexOf(element);

                element.style.transitionDelay =
                    `${Math.max(0, index) * 100}ms`;

                element.classList.add("revealed");

                // Reveal only once
                revealObserver.unobserve(element);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});