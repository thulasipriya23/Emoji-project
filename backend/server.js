const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Emoji list
const emojis = ["😄", "😂", "😍", "😎", "🤩", "🥳", "🔥", "💖"];

// Random color generator
function getRandomColor() {
  const colors = ["red", "blue", "green", "purple", "orange", "pink", "black"];
  return colors[Math.floor(Math.random() * colors.length)];
}

app.get("/generate", (req, res) => {
  const day = req.query.day || "Monday";

  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  const color = getRandomColor();

  const imageUrl = `https://via.placeholder.com/300x200/${color}/ffffff?text=${emoji}+${day}`;

  res.redirect(imageUrl);
});

app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});
