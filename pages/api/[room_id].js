import { MongoClient } from "mongodb";

const MONGO_URI =
  "mongodb+srv://notnag:onionandcarrot@cluster0.9mdc9oz.mongodb.net/code-buddy?retryWrites=true&w=majority";
export default async (req, res) => {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("code-buddy");
    const collection = database.collection("rooms");
    const data = await collection.find().toArray();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    await client.close();
  }
};