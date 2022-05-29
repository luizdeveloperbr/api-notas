import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Nota as NotaModel } from '@prisma/client';
import { NotaDto } from './dto/nota.dto';

@Injectable()
export class NotasService {
  constructor(private readonly prismaService: PrismaService) {}

  async registrarSaidaDeNota(BodySaidaServ: NotaDto): Promise<any> {
    const { id, dataSaida = new Date() } = BodySaidaServ;
    const consultarExiste = await this.consultar(id);
    if (Boolean(consultarExiste)) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          message: 'Nota já existe - saida',
        },
        HttpStatus.CONFLICT,
      );
    }
    return this.prismaService.nota.create({
      data: {
        id,
        dataSaida,
      },
    });
  }

  async consultarSaidaNota(id: string): Promise<NotaDto> {
    const resolve = await this.consultar(id);
    if (Boolean(resolve)) {
      return resolve;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          message: 'nota não encontrada - saida',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async registrarRetornoDeNota(
    bodyRegistrarRetorno: NotaDto,
  ): Promise<NotaModel> {
    const { id, dataRetorno = new Date() } = bodyRegistrarRetorno;
    const consultarExiste = await this.consultar(id);
    if(!Boolean(consultarExiste)){
      throw new HttpException({status:HttpStatus.NOT_FOUND,message:'não existe nota de saida registrada'},HttpStatus.NOT_FOUND)
    }else if (consultarExiste.dataRetorno) {
        throw new HttpException(
          {
            status: HttpStatus.CONFLICT,
            message: 'Nota já existe - retorno',
          },
          HttpStatus.CONFLICT,
        );
      }
    return this.prismaService.nota.update({
      where: {
        id,
      },
      data: {
        dataRetorno,
      },
    });
  }

  async consultarRetornoNota(id: string): Promise<any> {
    const resolve = await this.consultar(id);
    if (Boolean(resolve)) {
      if (resolve.dataRetorno) {
        return resolve;
      } else {
        throw new HttpException(
          {
            status: HttpStatus.EXPECTATION_FAILED,
            message: 'nota não possui retorno registrado',
          },
          HttpStatus.EXPECTATION_FAILED,
        );
      }
    } else {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          message: 'nota não encontrada - retorno',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  verificarCaracteres(numeroNota: string) {
    if (numeroNota.length < 44 || numeroNota.length > 44) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: 'o identificador deve conter 44 digitos',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  consultar(id: string) {
    return this.prismaService.nota.findUnique({
      where: { id },
    });
  }
}
