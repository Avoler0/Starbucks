import express from "express";
const PORT = 3000;
const app = express();
import globalRouter from "./routers/globalRouter.js";

app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log("Server Started");
});
