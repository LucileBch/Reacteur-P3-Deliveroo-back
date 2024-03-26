// ---------- RESTAURANT Routing ----------
// Import packages
const express = require(`express`);
const router = express.Router();

// Import controllers
const restaurantCtrl = require(`../controllers/restaurant`);

// ---------- Routes GET ----------
// Get restaurants
router.get("/", restaurantCtrl.restaurantDisplay);

// Export route
module.exports = router;
