import { name, internet } from "faker";

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

    it("InsertMany => Deve inserir varios registros com sucesso", async () => {
        const registros = [...Array(5).keys()].map(() => {
            const nome = name.firstName();
            const email = internet.email(nome);

            return {
                nome,
                email,
            };
        });

        const { body, status } = await global.testRequest
            .post("/registro/insert-many")
            .send(registros);

        expect(status).toBe(200);
        expect(body).toEqual({
            sucesso: true,
            mensagem: "Registros inseridos com sucesso",
        });
    });
});
