const header = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".area");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const targetId = entry.target.id;
          const correspondingNavLink = document.querySelector(
            `[data-target="${targetId}"]`
          );

          if (entry.isIntersecting) {
            correspondingNavLink.parentElement.classList.add("active");
          } else {
            correspondingNavLink.parentElement.classList.remove("active");
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();

        const targetId = link.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
};

export default header;
