import { Router } from "express";

import { default as Produto } from "./produto";
import { default as Servico } from "./servico"
import { default as Cliente} from "./cliente"
import { default as ProdutosConsumidos} from "./produtosConsumidos"
import { default as ServicosConsumidos} from "./servicosConsumidos"

const router = Router();

router.use("/produto", Produto);
router.use("/servico", Servico);
router.use("/cliente", Cliente);
router.use("/produtosConsumidos", ProdutosConsumidos);
router.use("/servicosConsumidos", ServicosConsumidos)

export default router;