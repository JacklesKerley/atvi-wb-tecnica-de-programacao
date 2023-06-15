import { Router } from "express";

import { default as Produto } from "./produto";
import { default as Servico } from "./servico"
import { default as Cliente} from "./cliente"

const router = Router();

router.use("/produto", Produto);
router.use("/servico", Servico);
router.use("/cliente", Cliente)

export default router;