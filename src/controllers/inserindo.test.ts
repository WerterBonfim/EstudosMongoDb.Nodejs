describe("MongoDb Inserindo Documentos", () => {
    it("InsertOne => Deve inserir um registro com sucesso", async () => {
        const { body, status } = await global.testRequest
            .post("/registro")
            .send({
                nome: "Werter Bonfim",
                email: "werter@wertersa.com.br",
            });

        expect(status).toBe(200);
        expect(body).toEqual({
            sucesso: true,
            mensagem: "Registro inserido com sucesso",
        });
    });
});
