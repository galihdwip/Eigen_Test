import { Test, TestingModule } from '@nestjs/testing';
import { Algoritma3Controller } from './algoritma3.controller';
import { Algoritma3Service } from './algoritma3.service';

describe('Algoritma3Controller', () => {
  let controller: Algoritma3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Algoritma3Controller],
      providers: [Algoritma3Service],
    }).compile();

    controller = module.get<Algoritma3Controller>(Algoritma3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
