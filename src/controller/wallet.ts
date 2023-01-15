import express, { Response } from "express";
declare interface Request extends express.Request {
  auth? : { [key:string] : any }
}

export const cryptoBalance = (req : Request, res : Response) => {
  res.json({});
}

export const getBalance = (req : Request, res : Response) => {
  res.json({});
}

export const addCrypto = (req : Request, res : Response) => {
  res.json({});
}

export const exchangeRate = (req : Request, res : Response) => {
  res.json({});
}

export const cryptoTransfer = (req : Request, res : Response) => {
  res.json({});
}

