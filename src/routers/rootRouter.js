import express from "express";
import { home, todoGet, todoPost, note } from "../controllers/rootController.js";
import { login, join } from "../controllers/userContoller";

const rootRouter = express.Router();


//이 부분이 home
rootRouter.get("/", home);

//todo
rootRouter.route("/todo").get(todoGet).post(todoPost);
rootRouter.get("/note", note);
rootRouter.get("/login", login);
rootRouter.get("/join", join);

export default rootRouter;