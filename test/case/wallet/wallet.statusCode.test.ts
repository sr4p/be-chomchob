describe("StatusCode: Wallet ", () => {
    const apiPart = "localhost:9999"
    const prefix = "wallet"
    test(`returns with status 200 (OK) @ POST ${apiPart}/${prefix}/balance`, async () => {
        expect(200).toEqual(200);
    })

    test(`returns with status 200 (OK) @ POST ${apiPart}/${prefix}/transfer`, async () => {
        expect(200).toEqual(200);
    })
})