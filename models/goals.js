const { Schema } = require("mongoose");
const goalSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: false,
    },

    level: {
      type: String,
      required: true,
      enum: ["Easy", "Medium", "Hard"],
    },
    // points: {
    //   type: Number,
    //   required: true,
    //   validate: {
    //     validator: function (value) {
    //       return [50, 100, 150].includes(value);
    //     },
    //     message: "Invalid points value",
    //   },
    // },
  },

  { timestamps: true }
);

module.exports = goalSchema;
