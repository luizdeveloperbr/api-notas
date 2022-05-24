import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';
import { ApiProperty } from '@nestjs/swagger';
import z from 'zod';
export const Notaz = extendApi(
  z.object({
    id: z.string(),
    dataSaida: z.date().or(z.string().regex(/\d{4}(.\d{2}){2}(\s|T)(\d{2}.){2}\d{2}/g,{message:"inserir DateTime no formato ISO 8601"})).optional(),
    dataRetorno: z.date().or(z.string().regex(/\d{4}(.\d{2}){2}(\s|T)(\d{2}.){2}\d{2}/g,{message:"inserir DateTime no formato ISO 8601"})).optional(),
  })
);
export class NotaDto extends createZodDto(Notaz) {
   @ApiProperty()
  id: string;

  @ApiProperty({required:false})
  dataSaida?: Date;

  @ApiProperty({required:false})
  dataRetorno?: Date;
}
