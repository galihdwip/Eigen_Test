import { Module } from '@nestjs/common';
import { ReturnedBooksService } from './returned-books.service';
import { ReturnedBooksController } from './returned-books.controller';
import { ReturnedBook } from './entities/returned-book.entity';
import { BorrowedBook } from 'src/borrowed-books/entities/borrowed-book.entity';
import { Member } from 'src/members/entities/member.entity';
import { Book } from 'src/books/entities/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([ ReturnedBook, BorrowedBook, Member, Book]),
  ],
  controllers: [ReturnedBooksController],
  providers: [ReturnedBooksService],
})
export class ReturnedBooksModule {}
