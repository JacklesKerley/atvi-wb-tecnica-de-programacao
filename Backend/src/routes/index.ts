import { Router } from "express";

import { default as Produto } from "./produto";
import { default as Servico } from "./servico"

const router = Router();

router.use("/produto", Produto);
router.use("/servico", Servico);

export default router;