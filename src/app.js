const express = require("express");
const router = require("./routers/api");
require("./db/conn");
const Books = require("./models/setApi");
const userRouter = require("./routers/userRouter");
const app = express();

const port = process.env.PORT || 4000;
app.use((req, res, next) => {
  console.log("HTTP METHOD " + req.method + " , URL " + req.url);
  next();
});

app.use(express.json());
app.use("/", router);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
