// ---------- APPLICATION ----------
// Import packages
require(`dotenv`).config();
const express = require(`express`);
const cors = require(`cors`);

// Create server
const app = express();

// Enable Cross-Origin requests
app.use(cors());

// Importing routes
const restaurantRoutes = require(`./routes/restaurant`);
app.use(restaurantRoutes);

// ---------- Routes ALL ----------
//Exclude uncorrect paths
app.get(`*`, (req, res) => {
  res.status(404).json({ message: "This route does not exists" });
});

// Listening
app.listen(process.env.PORT || 3200, () => {
  console.log(`Server Started 🚀`);
});
