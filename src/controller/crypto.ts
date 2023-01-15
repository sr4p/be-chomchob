import express, { Response } from "express";
declare interface Request extends express.Request {
  auth? : { [key:string] : any }
}

// ผู้ดูแลระบบสามารถดูยอดคงเหลือทั้งหมดของสกุลเงินดิจิทัลทั้งหมด
export const getBalance = (req : Request, res : Response) => {
  res.json({});
}

// ผู้ดูแลระบบสามารถเพิ่มสกุลเงินดิจิทัลอื่นๆ เช่น XRP, EOS, XLM ลงในกระเป๋าเงินได้
export const addCrypto = (req : Request, res : Response) => {
  
  res.json({});
}

// ผู้ดูแลระบบสามารถจัดการอัตราแลกเปลี่ยนระหว่างสกุลเงินดิจิทัลได้
export const exchangeRate = (req : Request, res : Response) => {
  res.json({});
}