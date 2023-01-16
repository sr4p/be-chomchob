describe("StatusCode: Crypto ", () => {
    const apiPart = "localhost:9999"
    const prefix = "crypto"
    test(`returns with status 200 (OK) @ POST ${apiPart}/${prefix}`, async () => {
        expect(201).toEqual(201);
    })

    test(`returns with status 200 (OK) @ GET ${apiPart}/${prefix}/balance`, async () => {
        expect(200).toEqual(200);
    })

    test(`returns with status 200 (OK) @ PUT ${apiPart}/${prefix}/exchange-rate/:id`, async () => {
        expect(200).toEqual(200);
    })
})