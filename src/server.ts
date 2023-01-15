import bodyParser from "body-parser";
import express, { Application } from "express";
import path from 'path'
import { wallet } from "./router/wallet";
import { auth } from "./router/auth";
import { getSequelize } from "./configs/db";

const app: Application = express();
const port: number = 9999;

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, ".")));

app.use("/wallet", wallet)
app.use("/auth", auth)

app.listen(port, () => {
  new Promise(async(resolve) => {
    await getSequelize();
    console.log(`Listening on port : ${port} 🌱`);
    resolve(true)
  })
});
