const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3ztqljx.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const toysCollection = client.db("toyHouse").collection("toys");


    //  toys

    app.get("/toys", async (req, res) => {
        let query = {}
        if(req.query.filterCategory){
            query = {subCategory: req.query.filterCategory}
        }
        if(req.query.search){
            query = {...query, toyName: { $regex: req.query.search, $options: 'i' } }
        }
      const cursor = toysCollection.find(query).limit(20);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("toys/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = {
        projection: {
          seller: 1,
          picture: 1,
          toyName: 1,
          subCategory: 1,
          rating: 1,
          price: 1,
          quantity: 1,
          details: 1,
        },
      };
      const result = await toysCollection.findOne(query, options);
      res.send(result);
    });

    app.post("/toys", async (req, res) => {
      const addToys = req.body;
      const result = await toysCollection.insertOne(addToys);
      res.send(result);
    });

    app.get("/toy", async (req, res) => {
      console.log(req.query.email);

      let query = {};
      if (req.query?.email) {
        query = { email: req.query?.email };
      }

      let sort = {};
      if (req.query.sort) {
        if (req.query.sort === "higher") {
          sort = { price: -1 };
        }
        if (req.query.sort === "lower") {
          sort = { price: +1 };
        }
      }

      const result = await toysCollection.find(query).sort(sort).toArray();
      res.send(result);
    });

    app.get("/myToys/:toyName", async (req, res) => {
      console.log(req.params.toyName);
      const result = await toysCollection
        .find({ toyName: req.params.toyName })
        .toArray();
      res.send(result);
    });

    app.get("/myToys/:subCategory", async (req, res) => {
      console.log(req.params.subCategory);
      if (
        req.params.subCategory === "Marvel" ||
        req.params.subCategory === "Avengers" ||
        req.params.subCategory === "Star Wars"
      ) {
        try {
          const result = await toysCollection
            .find({ subCategory: req.params.subCategory })
            .toArray();
          res.send(result);
          console.log(result);
        } catch (error) {
          console.error(error);
          res.status(500).send("Internal Server Error");
        }
      }
    });

    app.get("/toys/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await toysCollection.findOne(query);
      res.send(result);
    });

    app.patch("/toys/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedToy = req.body;
      const toy = {
        $set: {
          picture: updatedToy.picture,
          toyName: updatedToy.toyName,
          subCategory: updatedToy.subCategory,
          rating: updatedToy.rating,
          price: updatedToy.price,
          quantity: updatedToy.quantity,
          details: updatedToy.details,
          seller: updatedToy.seller,
          email: updatedToy.email,
        },
      };
      const result = await toysCollection.updateOne(filter, toy, options);
      res.send(result);
    });

    app.delete("/toys/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await toysCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Toy House is Running");
});

app.listen(port, () => {
  console.log(`Toy House Server Running On Port: ${port}`);
});
