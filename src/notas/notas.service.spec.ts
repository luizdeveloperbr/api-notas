import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { NotasService } from './notas.service';

describe('NotasService', () => {
  let service: NotasService;
  let numeroNota = '1234'.concat('abd'.repeat(10));
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, NotasService],
    }).compile();

    service = module.get<NotasService>(NotasService);
  });

  it('verificar caracteres', () => {
    expect(service.consultarSaidaNota(numeroNota)).resolves.toBe({
      dataRetorno: null,
      dataSaida: '2022-05-19T03:00:00.000Z',
      id: '1234abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd',
    });
  });
});
