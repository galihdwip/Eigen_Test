import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { BorrowedBook } from 'src/borrowed-books/entities/borrowed-book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, BorrowedBook ])],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}
