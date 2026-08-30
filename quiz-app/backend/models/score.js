const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    score: {
      type: Number,
      required: true,
    },

    total: {
      type: Number,
      required: true,
    },

    percentage: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Score", scoreSchema);