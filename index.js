const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
dotenv = require("dotenv").config();

const app = express();

//-------------MiddleWare-------------\\

app.use(cors());
app.use(express.json());

//------------MongoDB-----------------\\

//------------Root API-----------------\\

app.get("/", (req, res) => {
  res.send("My Node Server is running");
});

app.listen(port, () => {
  console.log("Server Connected: Listening Port", port);
});
