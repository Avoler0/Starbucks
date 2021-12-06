import express from "express";
const PORT = 3000;
const app = express();
import rootRouter from "./routers/rootRouter.js";

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static("public"));
app.use("/", rootRouter);


app.listen(PORT, () => {
  console.log("Server Started");
});
