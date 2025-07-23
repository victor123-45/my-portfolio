const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Set canvas to full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Binary characters
const letters = ["0", "1"];
const fontSize = 16;
const columns = canvas.width / fontSize;

// Create an array of drops — one per column
const drops = Array.from({ length: columns }).fill(1);

// Draw function
function draw() {
  // Translucent black background to fade previous frame
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set text style
  ctx.fillStyle = "#00ffc8"; // Aqua/cyan glow
  ctx.font = `${fontSize}px monospace`;

  // Loop over drops
  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset drop randomly if it goes off screen
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

// Redraw every 33ms (~30fps)
setInterval(draw, 33);

// Responsive canvas
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
