import Matter, {
  Engine,
  Render,
  World,
  Bodies,
  MouseConstraint,
} from "matter-js";

const matter = () => {
  document.addEventListener("DOMContentLoaded", function () {
    let gravityDeg = 0;

    const data = {
      JS: {
        title: "Javascript",
        level: 4,
        desc: "자바스크립트에 대한 설명이라고 할 수 있습니다. 자바스크립트에 대한 설명. 자바스크립트에 대한 설명.",
      },
      REACT: {
        title: "React.js",
        level: 5,
        desc: "React에 대한 설명이라고 할 수 있습니다. React에 대한 설명. React에 대한 설명.",
      },
      // ... (다른 데이터 추가)
    };

    const canvas = document.getElementById("matterCanvas");
    const selectedTitle = document.getElementById("selectedTitle");
    const starRating = document.getElementById("starRating");
    const selectedDesc = document.getElementById("selectedDesc");

    // Your Matter.js code here
    const engine = Matter.Engine.create();
    const render = Matter.Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: 1000,
        height: 1000,
        wireframes: false,
        background: "#1b1b19",
      },
    });

    // Event listeners
    Matter.Events.on(engine, "afterUpdate", () => {
      gravityDeg += 1;
    });

    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      element: canvas,
    }); // Include the required options
    Matter.World.add(engine.world, mouseConstraint);
    render.mouseConstraint = mouseConstraint;

    Matter.Events.on(render.mouseConstraint, "mousedown", (event) => {
      const newSelected = event.source.body && data[event.source.body.label];
      newSelected && updateSelected(newSelected);
    });

    // Initialization functions
    function updateSelected(selected) {
      selectedTitle.textContent = selected.title;
      starRating.innerHTML = Array(5)
        .fill(null)
        .map(
          (_, i) =>
            `<span style="filter: grayscale(${
              selected.level <= i ? 1 : 0
            })">&#11088;</span>`
        )
        .join("");
      selectedDesc.textContent = selected.desc;
    }

    // Start the engine and render
    Matter.Render.run(render);
    Matter.Runner.run(engine);
  });
};

export default matter;
