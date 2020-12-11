import { CriarCollecitons } from "./criar-collection";

describe("MongoDb -> Criando Collection", () => {
    it("Deve criar uma nova collection chama cars", async () => {
        const cenario = new CriarCollecitons();

        const resultado = await cenario.CriarCollection();
        expect(resultado.collectionName).toEqual("cars");
    });
});
