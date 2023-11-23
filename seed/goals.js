const db = require("../db");
const { Goal } = require("../models");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const goals = [
    {
      title: "Go for a walk",
      date: new Date(),
      level: "Easy",
    },
    {
      title: "Eat healthy",
      date: new Date(),
      level: "Medium",
    },
    {
      title: "No alcohol",
      date: new Date(),
      level: "Hard",
    },
  ];

  await Goal.insertMany(goals);
  console.log("created Goal");
};

const run = async () => {
  await main();
  db.close();
};

run();
