import request from "supertest";
import { app } from "../../../src/server";

describe("Response : Crypto ", () => {
    const apiPart = "localhost:9999"
    const prefix = "api/crypto"
    test(`returns with correct response @ POST ${apiPart}/${prefix}`, async () => {
        const res = await request(app).post(`${apiPart}/${prefix}`).send({})
        expect(res.body).toMatchObject({})
    })

    test(`returns with correct response @ GET ${apiPart}/${prefix}/balance`, async () => {
        const res = await request(app).get(`${apiPart}/${prefix}/balance`)
        expect(res.body).toMatchObject({})
    })

    test(`returns with correct response @ PUT ${apiPart}/${prefix}/exchange-rate/:id`, async () => {
        const res = await request(app).put(`${apiPart}/${prefix}/exchange-rate/:id`)
        expect(res.body).toMatchObject({})
    })
})