import { gsap } from "gsap";

const interactive = () => {
  const underlineElements = document.querySelectorAll(".underline");
  const bgColor = "var(--clr-yellow)";

  gsap.to(".a_01", {
    scrollTrigger: {
      trigger: ".profile-text",
      start: "center center",
      end: "bottom center",
      toggleActions: "play none none reverse",
      scrub: 1,
      onUpdate: ({ progress }) => {
        underlineElements.forEach((element) => {
          if (progress > 0) {
            element.style.backgroundColor = bgColor;
          } else {
            element.style.backgroundColor = "";
          }
        });
      },
    },
  });

  const careerText = document.querySelectorAll(".career-text");
  const cardBox = document.querySelectorAll(".card-box");

  gsap.to(".a_02", {
    scrollTrigger: {
      trigger: ".vertical-scroll",
      start: "center center",
      end: "bottom center",
      toggleActions: "play none reverse none",
      pin: true,
      pinSpacing: false,
      scrub: 12,
      duration: 3.5,
      ease: "circ.out",
      delay: 2,
      onUpdate: ({ progress }) => {
        const totalElements = Math.min(careerText.length, cardBox.length);
        const currentIndex = Math.floor(progress * totalElements);

        careerText.forEach((element) => {
          element.classList.remove("active");
        });
        cardBox.forEach((element) => {
          element.classList.remove("active");
        });

        if (currentIndex < totalElements) {
          careerText[currentIndex].classList.add("active");
          cardBox[currentIndex].classList.add("active");
        }
      },
    },
  });

  let tl4 = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".a_04",
        start: "center center",
        end: "top bottom",
        toggleActions: "play none none reverse",
        pin: true,
        pinSpacing: false,
        scrub: 2,
      },
    })
    .to(
      ".area.a_04",
      {
        delay: 0.01,
        scrub: 2,
      },
      "start"
    )
    .to(
      ".first-container h1",
      {
        duration: 4,
        scale: 2,
        scrub: 2,
      },
      "start"
    )
    .to(
      ".first-container h1",
      {
        opacity: 0,
        duration: 3,
        scrub: 2,
      },
      "start"
    )
    .to(
      ".second-container",
      {
        delay: 1,
        duration: 6,
        scale: 2,
        scrub: 2,
      },
      "start"
    )
    .to(
      ".second-container",
      {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrub: 2,
      },
      "start"
    );

  const a06 = document.querySelector(".area.a_06");
  const header = document.querySelector("header");
  const sideBoxL = document.querySelector(".side-box.left-side");
  const sideBoxR = document.querySelector(".side-box.right-side");

  gsap.to(".target-06.first", {
    height: 0,
    scrollTrigger: {
      trigger: ".a_06",
      start: "top center",
      end: "bottom center",
      scrub: 2,
      onUpdate: ({ progress }) => {
        gsap.to(a06, { opacity: 1 - progress });
      },
      onToggle: function (self) {
        const isZeroHeight = self.isActive;

        if (!isZeroHeight) {
          a06.classList.add("fixed");
        } else {
          a06.classList.remove("fixed");
        }
      },
    },
  });

  window.addEventListener("scroll", function () {
    const sectionRect06 = a06.getBoundingClientRect();

    if (sectionRect06.top < window.innerHeight && sectionRect06.bottom >= 0) {
      a06.classList.add("fixed");
      header.classList.add("v2");
    } else {
      a06.classList.remove("fixed");
      header.classList.remove("v2");
    }
  });

  const sideL = {
    trigger: ".target-07",
    start: "top center",
    end: "bottom center",
    scrub: 3,
  };

  const sideR = {
    trigger: ".target-07",
    start: "top center",
    end: "bottom center",
    scrub: 3,
  };

  gsap.to(sideBoxL, {
    x: -400,
    duration: 2.5,
    ease: "power2.out",
    scrollTrigger: sideL,
    pin: ".a_07",
  });

  gsap.to(sideBoxR, {
    x: 400,
    duration: 2.5,
    ease: "power2.out",
    scrollTrigger: sideR,
    pin: ".a_07",
  });

  const a08 = document.querySelector(".area.a_08");
  const rocketObj = document.querySelector(".flying-obj");

  gsap.timeline({
    scrollTrigger: {
      trigger: a08,
      start: "top center",
      end: "bottom center",
      scrub: 2,
      onUpdate: (self) => {
        const progress = self.progress;
        const pathLength = document
          .querySelector(".rocket-track")
          .getTotalLength();
        const point = document
          .querySelector(".rocket-track")
          .getPointAtLength(progress * pathLength);

        gsap.set(rocketObj, {
          x: point.x - 50,
          y: point.y - 50,
          rotation: point.alpha - 90,
        });
      },
    },
  });
};

export default interactive;
