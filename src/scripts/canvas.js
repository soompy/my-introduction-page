const canvas = () => {
  const lightCanvas = document.getElementById("lightCanvas");
  const ctx = lightCanvas.getContext("2d");

  lightCanvas.width = lightCanvas.clientWidth;
  lightCanvas.height = lightCanvas.clientHeight;

  const particles = [];

  class Particle {
    constructor(x, y, radius, speedX, speedY, color, maxRadius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.initialRadius = radius;
      this.speedX = speedX;
      this.speedY = speedY;
      this.color = color;
      this.maxRadius = maxRadius;
      this.opacity = 1;
    }

    update() {
      if (this.radius < this.maxRadius) {
        this.radius += 1;
        this.opacity -= 0.02;
      }

      this.x += this.speedX;
      this.y += this.speedY;

      this.draw();
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color.join(",")}, ${this.opacity})`;
      ctx.fill();
      ctx.closePath();
    }

    reset() {
      this.radius = this.initialRadius;
      this.opacity = 1;
    }
  }

  function createParticles(x, y, count) {
    for (let i = 0; i < count; i++) {
      const angle = Math.PI * 2 * (i / count);
      const speed = Math.random() * 6 + 1;
      const speedX = Math.cos(angle) * speed;
      const speedY = Math.sin(angle) * speed;
      const radius = Math.random() * 1 + 5;
      const color = getRandomColor();
      const maxRadius = Math.random() * 10 + 10;

      particles.push(
        new Particle(x, y, radius, speedX, speedY, color, maxRadius)
      );
    }
  }

  function getRandomColor() {
    const color = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ];
    return color;
  }

  function animate() {
    requestAnimationFrame(animate);

    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, lightCanvas.width, lightCanvas.height);

    particles.forEach((particle, index) => {
      particle.update();

      if (particle.opacity <= 0) {
        particles.splice(index, 1);
      }
    });
  }

  setInterval(() => {
    const x = Math.random() * lightCanvas.width;
    const y = Math.random() * lightCanvas.height;
    createParticles(x, y, 50);
  }, 2000);

  window.addEventListener("resize", () => {
    lightCanvas.width = lightCanvas.clientWidth;
    lightCanvas.height = lightCanvas.clientHeight;
  });

  animate();
};

export default canvas;