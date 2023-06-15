import { Router } from "express";

import { ProdutosConsumidos } from "../controllers";

const routes = Router();

routes.get('/', ProdutosConsumidos.listar);
routes.post('/', ProdutosConsumidos.criar);
routes.put('/:id', ProdutosConsumidos.atualizar);
routes.delete('/:id', ProdutosConsumidos.deletar);

export default routes;