import express from "express";
const app = express();
import cors from "cors";
import getRouters from "./routers/getRouters";

app.use(cors());

app.get("/", (_req, res) => {
  res.send("hello");
});

app.use("/get", getRouters);

export default app;
