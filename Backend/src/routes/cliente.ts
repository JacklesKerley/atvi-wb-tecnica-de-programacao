import { Router } from "express";

import { Cliente } from "../controllers";

const routes = Router();

routes.get('/', Cliente.getAll);
routes.get('/:id', Cliente.getById);
routes.post('/', Cliente.create);
routes.put('/:id', Cliente.update);
routes.delete('/:id', Cliente.delete);

export default routes;