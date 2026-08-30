const express = require("express");
const Score = require("../models/Score");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, score, total } = req.body;

    const percentage = Math.round((score / total) * 100);

    const newScore = await Score.create({
      name,
      score,
      total,
      percentage,
    });

    res.status(201).json(newScore);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to save score",
    });
  }
});

router.get("/leaderboard", async (req, res) => {
  try {
    const scores = await Score.find()
      .sort({ score: -1, percentage: -1 })
      .limit(10);

    res.json(scores);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch leaderboard",
    });
  }
});

module.exports = router;