require("dotenv").config();
const express = require("express");
const app = express();
const userRoutes = require("./Routes/userRoute");
const questionRoutes = require("./Routes/questionRoute");
const authMiddleware = require("./Middleware/authMiddleware");
const port = 5500;

app.get("/", (req, res) => {
  res.send("welcome mussie");
});

app.use(express.json());

app.use("/api/users", userRoutes);

app.use("/api/questions", authMiddleware, questionRoutes);

async function start() {
  try {
    await app.listen(port);
    console.log("Database Connected Successfully");
    console.log("Server is Listenning");
  } catch (error) {
    console.log(error.message);
  }
}
start();
