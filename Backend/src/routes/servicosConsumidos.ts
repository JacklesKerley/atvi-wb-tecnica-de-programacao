import { Router } from "express";

import { ServicosConsumidos } from "../controllers";

const routes = Router();

routes.get('/', ServicosConsumidos.listar);
routes.post('/', ServicosConsumidos.criar);
routes.put('/:id', ServicosConsumidos.atualizar);
routes.delete('/:id', ServicosConsumidos.deletar);

export default routes;