import express from "express";
import cookieParser from "cookie-parser";
import dotEnv from "dotenv";
import router from "./routes/routes.js";

const app = express();

dotEnv.config();
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    msg: "Hello world!!",
    success: true,
  });
});

app.use("/api", router);
export default app;
