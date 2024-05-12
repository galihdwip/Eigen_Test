import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, MoreThan, Repository } from 'typeorm';
import { BorrowedBook } from './entities/borrowed-book.entity';
import { Member } from 'src/members/entities/member.entity';
import { Book } from 'src/books/entities/book.entity';
import {
  BadRequestException,
  NotFoundException,
} from '@nestjs/common/exceptions';

@Injectable()
export class BorrowService {
  constructor(
    @InjectRepository(BorrowedBook)
    private readonly borrowedBookRepository: Repository<BorrowedBook>,
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async borrowBook(memberId: number, bookId: number): Promise<void> {
    const member = await this.memberRepository.findOne({
      where: { id: memberId },
      relations: ['borrowedBooks'],
    });
    if (!member) {
      throw new NotFoundException('Member not found');
    }

    if (member.borrowedBooks.length >= 2) {
      throw new BadRequestException(
        'Member has borrowed maximum number of books',
      );
    }

    const book = await this.bookRepository.findOne({
      where: { id: bookId },
      relations: ['borrowedBooks'],
    });
    if (!book) {
      throw new NotFoundException('Book not found');
    }

    // if (book.borrowedBook) {
    //   throw new BadRequestException('Book is already borrowed by another member');
    // }

    // Check if the book is currently being borrowed by another member
    const isBookBorrowed = await this.borrowedBookRepository.findOne({
      where: { book: { id: bookId, stock: Equal(0) } },
    });
    if (isBookBorrowed) {
      throw new BadRequestException(
        'Book is already borrowed by another member',
      );
    }

    // Check if the stock of the book is available
    if (book.stock === 0) {
      throw new BadRequestException('Book is out of stock');
    }

    // Check if member is under sanction
    if (member.isUnderSanction) {
      throw new BadRequestException('Member is under sanction');
    }

    // Create borrowed book record
    const borrowedBook = new BorrowedBook();
    borrowedBook.member = member;
    borrowedBook.book = book;
    borrowedBook.borrowDate = new Date();
    await this.borrowedBookRepository.save(borrowedBook);

    const calStock = new Book();
    calStock.stock = book.stock - 1;
    await this.bookRepository.update(book.id, calStock);
  }
}
