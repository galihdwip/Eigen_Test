import { Test, TestingModule } from '@nestjs/testing';
import { Algoritma4Service } from './algoritma4.service';

describe('Algoritma4Service', () => {
  let service: Algoritma4Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Algoritma4Service],
    }).compile();

    service = module.get<Algoritma4Service>(Algoritma4Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
