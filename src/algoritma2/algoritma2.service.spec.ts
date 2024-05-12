import { Test, TestingModule } from '@nestjs/testing';
import { Algoritma2Service } from './algoritma2.service';

describe('Algoritma2Service', () => {
  let service: Algoritma2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Algoritma2Service],
    }).compile();

    service = module.get<Algoritma2Service>(Algoritma2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
