import { Test, TestingModule } from '@nestjs/testing';
import { BorrowService } from './borrowed-books.service';

describe('BorrowedBooksService', () => {
  let service: BorrowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BorrowService],
    }).compile();

    service = module.get<BorrowService>(BorrowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
