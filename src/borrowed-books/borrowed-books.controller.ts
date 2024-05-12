import { Controller, Post, Body, Param, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { BorrowService } from './borrowed-books.service';

@Controller('borrowed-books')
export class BorrowController {
  constructor(private readonly borrowService: BorrowService) {}

  @Post(':memberId/:bookId')
  async borrowBook(@Param('memberId') memberId: string, @Param('bookId') bookId: string): Promise<void> {
    try {
      await this.borrowService.borrowBook(parseInt(memberId, 10), parseInt(bookId, 10));
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('An error occurred while processing the request');
    }
  }
}
