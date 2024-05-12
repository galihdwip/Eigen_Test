import { Test, TestingModule } from '@nestjs/testing';
import { Algoritma2Controller } from './algoritma2.controller';
import { Algoritma2Service } from './algoritma2.service';

describe('Algoritma2Controller', () => {
  let controller: Algoritma2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Algoritma2Controller],
      providers: [Algoritma2Service],
    }).compile();

    controller = module.get<Algoritma2Controller>(Algoritma2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
