import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const roomId = generateRoomId(6);
    const password = generatePassword(4);

    try {
      const client = await MongoClient.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      const db = client.db();

      await db.collection("rooms").insertOne({
        roomId,
        password,
      });

      client.close();

      res.status(201).json({
        message: "Room created successfully",
        roomId,
        password,
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to create room" });
    }
  } else {
    res.status(400).json({ message: "Invalid request method" });
  }
}

function generateRoomId(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function generatePassword(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
