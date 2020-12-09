import { Request, Response } from "express";

import { Controller, Get, Post } from "@overnightjs/core";
import { RegistroRepository } from "@src/repository/registro";
import { IResposta } from "@src/view-model/resposta";

@Controller("registro")
export class RegistroController {
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

        const resultado = await new RegistroRepository().InserirRegistro(body);
        return res.send(resultado);
    }
}
