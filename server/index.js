const express = require("express");
const cors = require("cors");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  transports: ["websocket"],
});
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

var htmlData = {};
var cssData = {};
var jsData = {};

app.use(cors());

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("join", (roomId) => {
    socket.join(roomId);
  });

  socket.on("html", (displayId, value) => {
    htmlData[displayId] = value.toString();
    socket.broadcast.to(displayId).emit("html", value);
  });

  socket.on("css", (displayId, value) => {
    cssData[displayId] = value.toString();
    socket.broadcast.to(displayId).emit("css", value);
  });

  socket.on("js", (displayId, value) => {
    jsData[displayId] = value.toString();
    socket.broadcast.to(displayId).emit("js", value);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

app.get("/:displayId", (req, res) => {
  const id = req.params.displayId;
  console.log(id);
  const obj1 = htmlData[id];
  console.log(obj1);
  const obj2 = cssData[id];
  console.log(obj2);
  const obj3 = jsData[id];
  console.log(obj3);
  const responseData = { obj1, obj2, obj3 };
  console.log(responseData);
  res.json(responseData);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
