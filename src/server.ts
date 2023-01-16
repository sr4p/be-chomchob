import bodyParser from "body-parser";
import express, { Application } from "express";
import 'express-async-errors';
import path from 'path'
import { wallet } from "./router/wallet";
import { auth } from "./router/auth";
import { getSequelize } from "./configs/db";
import { crypto } from "./router/crypto";
import { errorHandler } from "./controller/middleware";

const app: Application = express();
const port: number = 9999;

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, ".")));

app.use("/wallet", wallet)
app.use("/crypto", crypto)
app.use("/auth", auth)

app.use(errorHandler)
app.listen(port, () => {
  new Promise(async(resolve) => {
    await getSequelize();
    console.log(`Listening on port : ${port} 🌱`);
    resolve(true)
  })
});
