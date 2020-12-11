import logger from "@src/configurations/logging-config";
import { SuporteDb } from "@src/suporte/suporte-db";
import { IResposta } from "@src/view-model/resposta";

export class RegistroRepository extends SuporteDb {
    constructor() {
        super();
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public async InserirRegistro(registro: unknown): Promise<IResposta> {
        await this.TentaConectar();

        const result = await this.Client.db("from-node")
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

            const result = await this.Client.db("from-node")
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
