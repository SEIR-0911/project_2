const express = require("express");
const db = require("./db");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;

const streakController = require("./controllers/streaksController");
const goalsController = require("./controllers/goalsController");
const usersController = require("./controllers/usersController");

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send({ msg: "This is Root!" });
});

app.get("/streaks", streakController.getAllStreaks);
app.get("/goals", goalsController.getAllGoals);
app.get("/users", usersController.getAllUsers);

app.get("/streaks/:id", streakController.getOneStreak);
app.get("/goals/:id", goalsController.getOneGoal);
app.get("/users/:id", usersController.getOneUser);

app.post("/streaks", streakController.createStreak);
app.post("/goals", goalsController.createGoal);
app.post("/users", usersController.createUser);

app.put("/streaks/:id", streakController.updateStreak);
app.put("/goals/:id", goalsController.updateGoal);
app.put("/users/:id", usersController.updateUser);

app.delete("/streaks/:id", streakController.deleteStreak);
app.delete("/goals/:id", goalsController.deleteGoal);
app.delete("/users/:id", usersController.deleteUser);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
