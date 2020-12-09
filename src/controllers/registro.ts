import { Request, Response } from "express";

import { Controller, Get } from "@overnightjs/core";

@Controller("registro")
export class RegistroController {
    @Get("")
    public getTeste(_: Request, res: Response): void {
        res.send({
            sucesso: true,
        });
    }
}
