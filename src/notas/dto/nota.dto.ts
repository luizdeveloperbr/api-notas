import { createZodDto } from '@anatine/zod-nestjs';
import { ApiProperty } from '@nestjs/swagger';
import { NotaModel } from 'prisma/zod';

export class NotaDto extends createZodDto(NotaModel) {
  @ApiProperty()
  id: string;

  @ApiProperty({ required: false })
  dataSaida?: Date;

  @ApiProperty({ required: false })
  dataRetorno?: Date;
}
