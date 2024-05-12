import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReturnedBooksService } from './returned-books.service';


@Controller('returned-books')
export class ReturnedBooksController {
  constructor(private readonly returnedBooksService: ReturnedBooksService) {}

  @Post(':memberId/:bookId')
  async returnBook(@Param('memberId') memberId: string, @Param('bookId') bookId: string): Promise<void> {
    return this.returnedBooksService.returnBook(parseInt(memberId, 10), parseInt(bookId, 10));
  }
}
