import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from 'src/members/entities/member.entity';
import { BorrowedBook } from 'src/borrowed-books/entities/borrowed-book.entity';
import { ReturnedBook } from './entities/returned-book.entity';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Book } from 'src/books/entities/book.entity';

@Injectable()
export class ReturnedBooksService {
  constructor(
    @InjectRepository(BorrowedBook)
    private readonly borrowedBookRepository: Repository<BorrowedBook>,
    @InjectRepository(ReturnedBook)
    private readonly returnedBookRepository: Repository<ReturnedBook>,
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async returnBook(memberId: number, bookId: number): Promise<void> {
    const member = await this.memberRepository.findOne({
      where: { id: memberId },
      relations: ['borrowedBooks', 'borrowedBooks.book'],
    });
    if (!member) {
      throw new NotFoundException('Member not found');
    }

    // Find the borrowed book record
    const borrowedBook = member.borrowedBooks.find(
      (b) => b.book && b.book.id === bookId,
    );
    if (!borrowedBook) {
      throw new NotFoundException('Book is not borrowed by the member');
    }

    // Calculate penalty if the book is returned late
    const returnDate = new Date();
    const borrowedDate = borrowedBook.borrowDate;
    const daysDifference =
      (returnDate.getTime() - borrowedDate.getTime()) / (1000 * 3600 * 24);
    if (daysDifference > 7) {
      // Apply penalty
      member.isUnderSanction = true;
      await this.memberRepository.save(member);
    }

    const book = borrowedBook.book;

    // Create returned book record
    const returnedBook = new ReturnedBook();
    returnedBook.member = member;
    returnedBook.book = book;
    returnedBook.returnDate = returnDate;
    await this.returnedBookRepository.save(returnedBook);

    const calStock = new Book();
    calStock.stock = book.stock + 1;
    await this.bookRepository.update(book.id, calStock);

    const borrowedBookStat = new BorrowedBook();
    borrowedBookStat.isReturned = true;
    await this.borrowedBookRepository.update(borrowedBook.id, borrowedBookStat);
  }
}
