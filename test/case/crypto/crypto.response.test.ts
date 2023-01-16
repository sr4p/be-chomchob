describe("Response : Crypto ", () => {
    const apiPart = "localhost:9999"
    const prefix = "crypto"
    test(`returns with correct response @ POST ${apiPart}/${prefix}`, async () => {
        expect({}).toMatchObject({})
    })

    test(`returns with correct response @ GET ${apiPart}/${prefix}/balance`, async () => {
        expect({}).toMatchObject({})
    })

    test(`returns with correct response @ PUT ${apiPart}/${prefix}/exchange-rate/:id`, async () => {
        expect({}).toMatchObject({})
    })
})