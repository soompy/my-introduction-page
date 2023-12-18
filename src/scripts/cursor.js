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
};

export default cursor;
