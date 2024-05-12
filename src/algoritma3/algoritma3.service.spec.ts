import { Test, TestingModule } from '@nestjs/testing';
import { Algoritma3Service } from './algoritma3.service';

describe('Algoritma3Service', () => {
  let service: Algoritma3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Algoritma3Service],
    }).compile();

    service = module.get<Algoritma3Service>(Algoritma3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
