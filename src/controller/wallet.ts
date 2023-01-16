import express, { Response } from "express";
import Wallet from '../models/wallet.model';
import { sequelize } from "../configs/db";
import { Sequelize } from "sequelize";
declare interface Request extends express.Request {
  auth? : { [key:string] : any }
}

// ผู้ดูแลระบบสามารถเพิ่มและลดยอดคงเหลือสกุลเงินดิจิทัลของผู้ใช้ได้
export const walletBalance = async(req : Request, res : Response) => {
  const { address, crypto_id, amount } = req.body

  const balance = await Wallet(sequelize).findOne({ where : { address, crypto_id }, attributes : ["balance"]})
  if(balance && +balance?.dataValues.balance + amount < 0) return res.status(400).json({ message : "Balance not ignored!"});

  const data = await Wallet(sequelize).update({ balance: Sequelize.literal(`balance ${(amount || amount == 0 ) ? "+" : ""} ${amount}`)},{
    where: { address, crypto_id } ,
    returning: true
  }).then(async (res) => {
    if(res.at(0) == 0 && amount > 0) return await Wallet(sequelize).create({  address, crypto_id , balance : amount })
    return res.at(1);
  })

  res.json(data);
}

// ผู้ใช้สามารถโอนสกุลเงินดิจิทัลเดียวกันไปยังผู้อื่นได้
export const walletTransfer = (req : Request, res : Response) => {
  res.json({});
}

