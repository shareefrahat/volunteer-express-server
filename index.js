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

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6olzz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    console.log("DB Connected: MongoDB");

    const serviceCollection = client
      .db("VolunteerExpress")
      .collection("services");

    //--------------GET : READ----------------\\
    app.get("/services", async (req, res) => {
      const query = {};
      const cursor = await serviceCollection.find(query);
      result = await cursor.toArray();
      res.send(result);
    });

    //--------------POST : CREATE----------------\\

    app.post("/services", async (req, res) => {
      const newEvent = req.body;
      const result = await serviceCollection.insertOne(newEvent);
      res.send(result);
    });
  } finally {
    // client.close()
  }
}

run().catch(console.dir);

//------------Root API-----------------\\

app.get("/", (req, res) => {
  res.send("My Node Server is running");
});

app.listen(port, () => {
  console.log("Server Connected: Listening Port", port);
});
