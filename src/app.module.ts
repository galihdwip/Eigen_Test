import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembersModule } from './members/members.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { Member } from './members/entities/member.entity';
import { Book } from './books/entities/book.entity';
import { BorrowedBook } from './borrowed-books/entities/borrowed-book.entity';
import { BorrowedBooksModule } from './borrowed-books/borrowed-books.module';
import { ReturnedBooksModule } from './returned-books/returned-books.module';
import { ReturnedBook } from './returned-books/entities/returned-book.entity';
import { AlgoritmaModule } from './algoritma/algoritma.module';
import { Algoritma2Module } from './algoritma2/algoritma2.module';
import { Algoritma3Module } from './algoritma3/algoritma3.module';
import { Algoritma4Module } from './algoritma4/algoritma4.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'library',
      entities: [Member, Book, BorrowedBook, ReturnedBook],
      synchronize: true,
    }),
    MembersModule,
    BooksModule,
    BorrowedBooksModule,
    ReturnedBooksModule,
    AlgoritmaModule,
    Algoritma2Module,
    Algoritma3Module,
    Algoritma4Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
