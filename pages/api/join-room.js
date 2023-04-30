import { MongoClient } from "mongodb";

const MONGO_URI =
  "mongodb+srv://notnag:onionandcarrot@cluster0.9mdc9oz.mongodb.net/code-buddy?retryWrites=true&w=majority";

export default async function handler(req, res) {
  const { roomId, roomPassword } = req.body;
  if (req.method === "POST") {
    try {
      const client = await MongoClient.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      const db = client.db();

      const room = await db.collection("rooms").findOne({ roomId: roomId });
      client.close();
      if (!room) {
        res.status(404).json({ message: "Room not found" });
      } else if (room.password !== roomPassword) {
        res.status(401).json({ message: "Invalid password" });
      } else {
        res.status(200).json({ room });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to create room" });
    }
  } else {
    res.status(400).json({ message: "Invalid request method" });
  }
}
