import express, { Response } from "express";
declare interface Request extends express.Request {
  auth? : { [key:string] : any }
}

// ผู้ดูแลระบบสามารถเพิ่มและลดยอดคงเหลือสกุลเงินดิจิทัลของผู้ใช้ได้
export const walletBalance = (req : Request, res : Response) => {
  res.json({});
}

// ผู้ใช้สามารถโอนสกุลเงินดิจิทัลเดียวกันไปยังผู้อื่นได้
export const walletTransfer = (req : Request, res : Response) => {
  res.json({});
}

