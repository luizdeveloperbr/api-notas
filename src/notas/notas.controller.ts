import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { NotaSaidaDto } from './dto/nota.dto';
import { NotasService } from './notas.service';

@Controller('notas')
export class NotasController {
  constructor(private readonly notasService: NotasService) {}

  //end-point de saida de nota
  @Post('saida')
  registrarSaida(@Body() notaSaidaDto : NotaSaidaDto) {
    return this.notasService.registrarSaidaDeNota(notaSaidaDto);
  }

  //end-point de retorno de nota
  @Post('retorno')
  registrarRetorno(@Body() notaSaidaDto : NotaSaidaDto) {
    return this.notasService.registrarSaidaDeNota(notaSaidaDto);
  }

  @Get(':id')
  consultarNota(@Param('id') id: string) {
    //verifica se o ID possui 11 digitos
    if(id.length < 11){
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        message:'o identificador deve conter 11 digitos'
      },HttpStatus.BAD_REQUEST)
    }
    return this.notasService.consulta(id);
  }
}
