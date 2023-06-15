import { Router } from "express";

import { Produto } from "../controllers";

const routes = Router();

routes.get("/", Produto.getAll);
routes.get("/:id", Produto.getById);
routes.post("/", Produto.create);
routes.put("/:id", Produto.update);
routes.delete("/:id",Produto.delete)


export default routes;