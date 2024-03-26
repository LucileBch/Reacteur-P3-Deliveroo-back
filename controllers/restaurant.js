// ---------- RESTAURANT Controllers ----------
// Import packages
require(`dotenv`).config();
const axios = require(`axios`);

// ---------- GET ----------
// Restaurant display
const restaurantDisplay = async (req, res) => {
  try {
    // const datas = await axios.get(process.env.API_URL, {
    //   headers: {
    //     Authorization: `Bearer ${process.env.API_KEY}`,
    //   },
    // });
    // res.status(200).json(datas.data);

    // Temporary saving datas in json file
    const datas = require(`../datas.json`);
    return res.json(datas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export controllers
module.exports = { restaurantDisplay };
