import request from "supertest";
import { app } from "../../../src/server"

describe("StatusCode: Crypto ", () => {
    const apiPart = "localhost:9999"
    const prefix = "crypto"
    test(`returns with status 200 (OK) @ POST ${apiPart}/${prefix}`, async () => {
        const res = await request(app).post(`${apiPart}/${prefix}`).send({})
        expect(res.statusCode).toEqual(201);
    })

    test(`returns with status 200 (OK) @ GET ${apiPart}/${prefix}/balance`, async () => {
        const res = await request(app).get(`${apiPart}/${prefix}/balance`)
        expect(res.statusCode).toEqual(200);
    })

    test(`returns with status 200 (OK) @ PUT ${apiPart}/${prefix}/exchange-rate/:id`, async () => {
        const res = await request(app).put(`${apiPart}/${prefix}/exchange-rate/:id`)
        expect(res.statusCode).toEqual(200);
    })
})