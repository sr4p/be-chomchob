import request from "supertest";
import { app } from "../../../src/server";
import kill from "kill-port";

describe("StatusCode: Wallet ", () => {
        beforeAll(() => {});
    
        afterAll(() => {});
        
        const apiPart = `localhost:${process.env.NODE_PORT}`;
        const prefix = "api/wallet";
    
        test(`returns with status 200 (OK) @ POST ${apiPart}/${prefix}/balance`, async () => {
            const res = await request(app)
          .post(`/${prefix}/balance`)
          .auth(process.env.ADMIN_TOKEN + "", { type: "bearer" })
          .send({
            address: "c8433dbf-88b2-41da-9516-d9852765d0e2",
            crypto_id: "36106ab5-8e1d-49eb-8bd1-04ac39444d1a",
            amount: 1,
          });
    
            expect(res.statusCode).toEqual(200);
        })
    
        test(`returns with status 200 (OK) @ POST ${apiPart}/${prefix}/transfer`, async () => {
            const res = await request(app)
          .post(`/${prefix}/transfer`)
          .auth(process.env.USER_TOKEN+"", { type: 'bearer' })
          .send({
            address_from: "c8433dbf-88b2-41da-9516-d9852765d0e2",
            address_to: "1c8ba24b-b6f6-46be-821d-43e5e121861b",
            crypto: "tk/btc",
            amount: 1.0,
          });
    
          expect(res.statusCode).toEqual(200);
        })
    
})