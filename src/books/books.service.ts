import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm/repository/Repository';
import { BorrowedBook } from 'src/borrowed-books/entities/borrowed-book.entity';

@Injectable()
export class BooksService {
    constructor(
      @InjectRepository(Book)
      private readonly bookRepository: Repository<Book>,
      @InjectRepository(BorrowedBook)
      private readonly borrowedBookRepository: Repository<BorrowedBook>,
    ) {}
  
    async create(book: Book): Promise<Book> {
      return this.bookRepository.save(book);
    }

  // async findAll() {
  //   return await this.bookRepository.find();
  // }

  async findOne(id: number): Promise<Book> {
    return this.bookRepository.findOne({ where: { id } });
}


async update(id: number, book: Book): Promise<Book> {
  await this.bookRepository.update(id, book);
  return this.bookRepository.findOne({ where: { id } });
}

  async delete(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }

  async checkBook(): Promise<Book[]> {

    const books = await this.bookRepository.find();
    const borrowedBooks = await this.borrowedBookRepository.find({ relations: ['book'] });
    const borrowedBookIds = borrowedBooks.map(borrowedBook => borrowedBook.book.id);

    // Filter buku yang belum dipinjam
    const availableBooks = books.filter(book => !borrowedBookIds.includes(book.id));

    return availableBooks.map(book => {
      return { ...book, stock: book.stock }; // Mengembalikan properti stock sesuai dengan kebutuhan
    });
    
    // const books = await this.bookRepository.find();
    // const borrowedBooks = await this.borrowedBookRepository.find({ relations: ['book'] });
    // const borrowedBookIds = borrowedBooks.map(borrowedBook => borrowedBook.book.id);
    // return books.map(book => {
    //   const borrowedQuantity = borrowedBookIds.filter(id => id === book.id).length;
    //   const availableStock = book.stock - borrowedQuantity;
    //   return { ...book, stock: availableStock };
    // });
  }

  // return books.filter(book => !borrowedBookIds.includes(book.id));
}
