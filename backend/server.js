import app from "./app.js";
import connecttoMongoDB from "./db/connect.js";
import { server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  connecttoMongoDB();

  console.log("Server is running on " + PORT);
});
