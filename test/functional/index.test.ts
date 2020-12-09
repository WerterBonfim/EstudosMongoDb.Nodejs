import supertest from "supertest";

describe("Teste Funcional MongoNode", () => {
    it("Deve retornar sucesso para o primeiro teste", async () => {
        const { body, status } = await global.testRequest.get("/registro");
        expect(status).toBe(200);
        expect(body).toEqual({
            sucesso: true,
        });
    });
});
