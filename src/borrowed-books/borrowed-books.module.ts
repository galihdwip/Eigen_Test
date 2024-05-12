import { Module } from '@nestjs/common';
import { BorrowService } from './borrowed-books.service';
import { BorrowController } from './borrowed-books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from 'src/members/entities/member.entity';
import { Book } from 'src/books/entities/book.entity';
import { BorrowedBook } from 'src/borrowed-books/entities/borrowed-book.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BorrowedBook, Member, Book]),
  ],
  controllers: [BorrowController],
  providers: [BorrowService],
})
export class BorrowedBooksModule {}
