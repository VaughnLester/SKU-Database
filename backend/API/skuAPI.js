import { Router } from "express";
import { getSkus, skuByID } from "../controllers/skuController.js";

const skuRouter = Router();

skuRouter.get("/getSKUs", getSkus);
skuRouter.post("/skuByID", skuByID);

export {skuRouter}

