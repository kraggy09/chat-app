import app from "./app.js";
import connecttoMongoDB from "./db/connect.js";

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connecttoMongoDB();

  console.log("Server is running on " + PORT);
});
