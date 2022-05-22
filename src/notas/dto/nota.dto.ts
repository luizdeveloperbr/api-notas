import { ApiProperty } from '@nestjs/swagger';

export class NotaDto {
  @ApiProperty()
  id: string;
  
  @ApiProperty()
  dataSaida: Date;
  
  @ApiProperty()
  dataRetorno: Date;
}
