const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const axios = require("axios");
const cron = require("node-cron");
const PriceData = require("./models/priceDetails");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGODB_URI;
const API_URL = process.env.API_URL;

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Fetch data from external API
async function fetchData() {
  try {
    const response = await axios.get(API_URL);
    const data = response.data;

    // Store data in MongoDB
    const priceData = new PriceData({
      timestamp: data.timestamp,
      price: data.price,
      currency: data.currency,
      market: data.market,
    });
    await priceData.save();

    console.log("Data fetched from API and stored successfully:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Set up a cron job to fetch data every 15 minutes
cron.schedule("*/15 * * * *", fetchData);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
