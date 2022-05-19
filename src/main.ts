import { NestFactory } from '@nestjs/core';
import { NotasModule } from './notas/notas.module';

async function bootstrap() {
  const app = await NestFactory.create(NotasModule);
  await app.listen(3000);
}
bootstrap();
