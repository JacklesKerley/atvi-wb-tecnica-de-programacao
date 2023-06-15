import { Router } from "express";

import { default as Produto } from "./produto";

const router = Router();

router.use("/produto",Produto);

export default router;