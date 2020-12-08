import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";


@Controller('registro')
export class RegistroController {

    @Get('')
    public getTeste(_: Request, res: Response): void {
        res.send({
            sucesso: true
        });
    }

}