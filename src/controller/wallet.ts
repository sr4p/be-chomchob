import express, { Response } from "express";
import Wallet from '../models/wallet.model';
import { sequelize } from "../configs/db";
import { Op, Sequelize } from "sequelize";
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
export const walletTransfer = async(req : Request, res : Response) => {
  const { address_from, address_to, crypto_id, amount } = req.body

  const balance = await Wallet(sequelize).findOne({ where : { address : address_from, crypto_id }, attributes : ["balance"]})
  if(balance && +balance?.dataValues.balance < amount) return res.status(400).json({ message : "Balance not ignored!"});

  const find = await Wallet(sequelize).findOne({ where : { address : address_to, crypto_id }, attributes : ["id"]})
  if(!find) await Wallet(sequelize).create({ address : address_to, crypto_id })

  const data = await Wallet(sequelize).update({ balance: Sequelize.literal(`CASE 
  WHEN address::VARCHAR like '${address_from}'::VARCHAR THEN balance - ${amount}
  WHEN address::VARCHAR like '${address_to}'::VARCHAR THEN balance + ${amount}
  ELSE balance END
  `)},{
    where: { address : { [Op.in] : [address_from,address_to] }, crypto_id } ,
    returning: true
  })

  res.json(data.at(1));
}

