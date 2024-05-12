import { Test, TestingModule } from '@nestjs/testing';
import { BorrowController } from './borrowed-books.controller';
import { BorrowService } from './borrowed-books.service';

describe('BorrowedBooksController', () => {
  let controller: BorrowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BorrowController],
      providers: [BorrowService],
    }).compile();

    controller = module.get<BorrowController>(BorrowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
