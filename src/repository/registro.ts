import { json } from "body-parser";
import { EROFS } from "constants";
import e from "express";
import { MongoClient } from "mongodb";

import logger from "@src/configurations/logging-config";
import { IResposta } from "@src/view-model/resposta";

export class RegistroRepository {
    private readonly _connectionString: string;
    private readonly _mongoClient: MongoClient;

    constructor() {
        this._connectionString = "mongodb://mongo:!123Senha@localhost/admin";
        this._mongoClient = new MongoClient(this._connectionString, {
            useUnifiedTopology: true,
            connectTimeoutMS: 2000,
        });
    }

    private async TentaConectar(): Promise<void> {
        if (this._mongoClient && this._mongoClient.isConnected()) return;
        this._mongoClient.connect();
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public async InserirRegistro(registro: unknown): Promise<IResposta> {
        await this.TentaConectar();

        const result = await this._mongoClient
            .db("from-node")
            .collection("registros")
            .insertOne(registro);

        logger.info("Inseriu um registro", JSON.stringify(result, null, 2));

        return {
            sucesso: true,
            mensagem: "Registro inserido com sucesso",
        };
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public async InserirRegistroVarios(
        registros: unknown[]
    ): Promise<IResposta> {
        try {
            await this.TentaConectar();

            const result = await this._mongoClient
                .db("from-node")
                .collection("registros")
                .insertMany(registros);

            logger.info(
                "Inseriu varios registro",
                JSON.stringify(result, null, 2)
            );

            return {
                sucesso: true,
                mensagem: "Registros inseridos com sucesso",
            };
        } catch (error) {
            logger.error(
                "Erro ao tentar inserir varios registros",
                JSON.stringify(error, null, 2)
            );
            throw error;
        }
    }
}
