const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/BooksDirectory")
  .then(() => console.log("Connection Succefully"))
  .catch((e) => console.log("No connection"));
