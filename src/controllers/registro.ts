import { Request, Response } from "express";

import { Controller, Get, Post } from "@overnightjs/core";
import { RegistroRepository } from "@src/repository/registro";
import { IResposta } from "@src/view-model/resposta";

@Controller("registro")
export class RegistroController {
    private readonly _registroRepository: RegistroRepository;

    constructor() {
        this._registroRepository = new RegistroRepository();
    }

    @Get("")
    public getTeste(_: Request, res: Response): void {
        res.send({
            sucesso: true,
        });
    }

    @Post("")
    public async adicionarRegistro(
        _: Request,
        res: Response
    ): Promise<Response<IResposta>> {
        const { body } = _;

        const resultado = await this._registroRepository.InserirRegistro(body);
        return res.send(resultado);
    }

    @Post("insert-many")
    public async adicionarVariosRegistros(
        _: Request,
        res: Response
    ): Promise<Response<IResposta>> {
        const itens = _.body as unknown[];

        const resultado = await this._registroRepository.InserirRegistroVarios(
            itens
        );
        return res.send(resultado);
    }
}
