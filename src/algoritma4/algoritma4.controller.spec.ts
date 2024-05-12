import { Test, TestingModule } from '@nestjs/testing';
import { Algoritma4Controller } from './algoritma4.controller';
import { Algoritma4Service } from './algoritma4.service';

describe('Algoritma4Controller', () => {
  let controller: Algoritma4Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Algoritma4Controller],
      providers: [Algoritma4Service],
    }).compile();

    controller = module.get<Algoritma4Controller>(Algoritma4Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
