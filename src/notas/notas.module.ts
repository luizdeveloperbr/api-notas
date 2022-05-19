import { Module } from '@nestjs/common';
import { NotasService } from './notas.service';
import { NotasController } from './notas.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [NotasController],
  providers: [NotasService, PrismaService],
})
export class NotasModule {}
