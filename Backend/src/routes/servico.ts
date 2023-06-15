import { Router } from "express";

import { Servico } from "../controllers";

const routes = Router();

routes.get("/", Servico.getAll);
routes.get("/:id", Servico.getAll);
routes.post("/", Servico.create);
routes.put("/:id", Servico.update);
routes.delete("/:id", Servico.delete)

export default routes;