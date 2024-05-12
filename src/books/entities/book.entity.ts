import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { BorrowedBook } from 'src/borrowed-books/entities/borrowed-book.entity';
import { ReturnedBook } from 'src/returned-books/entities/returned-book.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  code: string;

  @Column('text')
  title: string;

  @Column('text')
  author: string;

  @Column({ default: 0 })
  stock: number;

  @OneToOne(() => BorrowedBook, (borrowedBook) => borrowedBook.book)
  borrowedBook: BorrowedBook;

  @OneToMany(() => BorrowedBook, (borrowedBook) => borrowedBook.book)
  borrowedBooks: BorrowedBook[];

  @OneToMany(() => ReturnedBook, (returnedBook) => returnedBook.book)
  returnedBooks: ReturnedBook[];
}
