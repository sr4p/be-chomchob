import { role, roles } from "../controller/middleware";
import express, { Router, Response } from "express";
import { cryptoBalance, cryptoTransfer, getBalance } from "../controller/wallet";

const router: Router = express.Router();

router.get("/", roles([role.admin,role.user]),(_,res : Response) => (res.json({ message : "Hi. 🌱" })));

//@TODO: admin
router.post("/balance", roles([role.admin]),cryptoBalance);
router.get("/balance", roles([role.admin]),getBalance);
router.post("/crypto", roles([role.admin]),cryptoBalance);
router.get("/exchange-rate", roles([role.admin]),cryptoBalance);

//@TODO: user
router.post("/transfer ", roles([role.user]),cryptoTransfer);

export { router as wallet };
