import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Nota as NotaModel } from '@prisma/client';
import { NotaSaidaDto } from './dto/nota.dto';

@Injectable()
export class NotasService {
  constructor(private readonly prismaService: PrismaService) {}

  // metodos usados no controller 'notas.controller.ts'
  async registrarSaidaDeNota(notaSaidaDto: NotaSaidaDto): Promise<NotaModel> {
    const { id, dataSaida, dataRetorno } = notaSaidaDto;
    return this.prismaService.nota.create({
      data: {
        id,
        dataSaida,
        dataRetorno,
      },
    });
  }
  //metodo de registro de retorno
  registrarRetorno(){
    
  }

// metodo de consulta pelo numero da nota
  async consulta(id: string): Promise<NotaModel> {
    return this.prismaService.nota.findUnique({ 
      where: { id }
    });
  }
}
