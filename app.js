const express = require("express");
const app = express();

app.use(express.json())

const post = require("./routes/postRoute");
const user = require("./routes/userRoute");

app.use("/api/v1",post);
app.use("/api/v1",user);

module.exports = app;