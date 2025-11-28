const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const episodeRoutes = require("./routes/episodeRoutes");
const poemRoutes = require("./routes/poemRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/episodes", episodeRoutes);
app.use("/api/poems", poemRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
