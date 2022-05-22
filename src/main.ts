import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NotasModule } from './notas/notas.module';

async function bootstrap() {
  const app = await NestFactory.create(NotasModule);
  const config = new DocumentBuilder()
    .setTitle('Consulta de Notas Fiscais')
    .setDescription('Notas enviadas para entrega ao cliente')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
