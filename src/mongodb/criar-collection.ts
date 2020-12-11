import { Collection } from "mongodb";

import logger from "@src/configurations/logging-config";
import { SuporteDb } from "@src/suporte/suporte-db";

export class CriarCollecitons extends SuporteDb {
    constructor() {
        super();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public async CriarCollection(): Promise<Collection<any>> {
        await this.TentaConectar();

        const resultado = await this.Client.db(
            "rascunho-node"
        ).createCollection("cars", {
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["model", "year"],
                    properties: {
                        model: {
                            bsonType: "string",
                            description:
                                "O modelo é necessário e deve ser uma string",
                        },
                        madeBy: {
                            bsonType: "string",
                            minLength: 3,
                        },
                        year: {
                            bsonType: "int",
                            minimum: 1980,
                            maximum: 2025,
                        },
                    },
                },
            },
        });

        return resultado;
    }
}
