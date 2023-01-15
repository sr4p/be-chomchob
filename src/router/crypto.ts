import { role, roles } from "../controller/middleware";
import express, { Router, Response } from "express";
import { addCrypto, exchangeRate, getBalance } from "../controller/crypto";

const router: Router = express.Router();

router.get("/", roles([role.admin,role.user]),(_,res : Response) => (res.json({ message : "Hi. 🌱" })));

//@TODO: admin
router.post("/crypto", roles([role.admin]),addCrypto);
router.get("/balance", roles([role.admin]),getBalance);
router.get("/exchange-rate", roles([role.admin]),exchangeRate);

export { router as crypto };
