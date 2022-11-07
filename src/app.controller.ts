import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  public async index(@Res() res: Response): Promise<any> {
    res.render('home');
  }
}
