const cursor = () => {
  document.addEventListener("mousemove", (e) => {
    const cursorDefaultInner = document.querySelector(
      ".cursor__default__inner"
    );
    const cursorTraceInner = document.querySelector(".cursor__trace__inner");

    cursorDefaultInner.style.top = e.clientY + "px";
    cursorDefaultInner.style.left = e.clientX + "px";

    cursorTraceInner.style.top = e.clientY + "px";
    cursorTraceInner.style.left = e.clientX + "px";
  });

  const cursorElement = document.querySelector(".cursor");

  document.addEventListener("mousedown", () => {
    cursorElement.classList.add("cursor--active");
  });
  document.addEventListener("mouseup", () => {
    cursorElement.classList.remove("cursor--active");
  }); 

  const aElements = document.querySelectorAll("a");
  const cursorTraceInner = document.querySelector(".cursor__trace__inner");

  aElements.forEach((aElement) => {
    aElement.addEventListener("mouseover", () => {
      cursorTraceInner.style.transform = "translate(-50%, -50%) scale(1.4)";
      cursorTraceInner.style.backgroundColor = '#0ae448';
    });

    aElement.addEventListener("mouseout", () => {
      cursorTraceInner.style.transform = "translate(-50%, -50%) scale(1)";
      cursorTraceInner.style.backgroundColor = '#4b8d47';
    });
  });
};

export default cursor;
