import { MongoClient } from "mongodb";

export abstract class SuporteDb {
    private readonly _connectionString: string;
    protected readonly Client: MongoClient;

    constructor() {
        this._connectionString = "mongodb://mongo:!123Senha@localhost/admin";
        this.Client = new MongoClient(this._connectionString, {
            useUnifiedTopology: true,
            connectTimeoutMS: 2000,
        });
    }

    protected async TentaConectar(): Promise<void> {
        if (this.Client && this.Client.isConnected()) return;
        this.Client.connect();
    }
}
