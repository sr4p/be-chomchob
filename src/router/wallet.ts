import { role, roles } from "../controller/middleware";
import express, { Router, Response } from "express";
import { walletBalance, walletTransfer } from "../controller/wallet";

const router: Router = express.Router();

router.get("/", roles([role.admin,role.user]),(_,res : Response) => (res.json({ message : "Hi. 🌱" })));

//@TODO: admin
router.post("/balance", roles([role.admin]),walletBalance);

//@TODO: user
router.post("/transfer", roles([role.user]),walletTransfer);

export { router as wallet };
