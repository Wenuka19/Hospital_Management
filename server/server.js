//Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION💥 Shutting Down....");
  console.log(err.name, err.message);
  process.exit(1);
});

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = require("./app");

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error("error"));
db.once("open", () => console.log("Connected to Mongoose"));

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});

//Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION 💥");
  //exit the app gracefully
  server.close(() => {
    process.exit(1);
  });
});
