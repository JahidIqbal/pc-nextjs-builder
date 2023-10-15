const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://product_portal_user:FBvfz0tOSd5B4dqF@cluster0.ahkgffp.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    const productsCollection = await client
      .db("products_portal")
      .collection("products");
    if (req.method == "GET") {
      const products = await productsCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: products });
    }
    console.log("database connection established");
  } finally {
  }
}

export default run;
