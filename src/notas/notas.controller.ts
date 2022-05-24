import { ZodValidationPipe } from '@anatine/zod-nestjs';
import { Controller, Get, Post, Body, Param, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { NotaDto } from './dto/nota.dto';
import { NotasService } from './notas.service';

@ApiTags('Notas')
@Controller('notas')
@UsePipes(ZodValidationPipe)
export class NotasController {
  constructor(private readonly notasService: NotasService) {}

  @Post('saida')
  @ApiOperation({ summary: 'Registrar Saida de Nota' })
  registrarSaida(@Body() reqSaidaNota: NotaDto): Promise<any> {
    this.notasService.verificarCaracteres(reqSaidaNota.id);
    return this.notasService.registrarSaidaDeNota(reqSaidaNota);
  }

  @Get('saida/:id')
  @ApiOperation({ summary: 'Consultar se nota saiu para entrega' })
  consultarSaida(@Param('id') id: string): Promise<NotaDto> {
    this.notasService.verificarCaracteres(id);
    return this.notasService.consultarSaidaNota(id);
  }

  @Post('retorno')
  @ApiOperation({ summary: 'Registrar Retorno de Nota' })
  registrarRetorno(@Body() reqRetornoNota: NotaDto) {
    this.notasService.verificarCaracteres(reqRetornoNota.id);
    return this.notasService.registrarRetornoDeNota(reqRetornoNota);
  }

  @Get('retorno/:id')
  @ApiOperation({ summary: 'Consultar se nota retornou da entrega' })
  consultarNota(@Param('id') id: string): Promise<any> {
    this.notasService.verificarCaracteres(id);
    return this.notasService.consultarRetornoNota(id);
  }
}
