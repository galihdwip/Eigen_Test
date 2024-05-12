import { Test, TestingModule } from '@nestjs/testing';
import { ReturnedBooksController } from './returned-books.controller';
import { ReturnedBooksService } from './returned-books.service';

describe('ReturnedBooksController', () => {
  let controller: ReturnedBooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReturnedBooksController],
      providers: [ReturnedBooksService],
    }).compile();

    controller = module.get<ReturnedBooksController>(ReturnedBooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
