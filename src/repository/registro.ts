import { MongoClient } from "mongodb";

import { IResposta } from "@src/view-model/resposta";

export class RegistroRepository {
    private readonly _connectionString: string;

    constructor() {
        this._connectionString = "mongodb://mongo:!123Senha@localhost/admin";
    }

    private async CriarConexao(): Promise<MongoClient> {
        const mongoClient = new MongoClient(this._connectionString);

        const client = await mongoClient.connect();

        if (!client.isConnected())
            throw new Error("Não foi possivel conectar ao mongodb");

        return client;
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public async InserirRegistro(registro: unknown): Promise<IResposta> {
        const conexao = await this.CriarConexao();

        const result = await conexao
            .db("from-node")
            .collection("registros")
            .insertOne(registro);

        console.log("result", result);

        return {
            sucesso: true,
            mensagem: "Registro inserido com sucesso",
        };
    }
}
