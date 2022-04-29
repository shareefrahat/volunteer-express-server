const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
dotenv = require("dotenv").config();

const app = express();

//-------------MiddleWare-------------\\

app.use(cors());
app.use(express.json());

//------------MongoDB-----------------\\

const uri =
  "mongodb+srv://<username>:<password>@cluster0.6olzz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  console.log("Database Connected: MongoDB");
  client.close();
});

//------------Root API-----------------\\

app.get("/", (req, res) => {
  res.send("My Node Server is running");
});

app.listen(port, () => {
  console.log("Server Connected: Listening Port", port);
});
