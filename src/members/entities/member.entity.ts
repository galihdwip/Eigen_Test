import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BorrowedBook } from 'src/borrowed-books/entities/borrowed-book.entity';
import { ReturnedBook } from 'src/returned-books/entities/returned-book.entity';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  code: string;

  @Column('text')
  name: string;

  @Column()
  isUnderSanction: boolean;

  @OneToMany(() => BorrowedBook, (borrowedBook) => borrowedBook.member)
  borrowedBooks: BorrowedBook[];

  @OneToMany(() => ReturnedBook, (returnedBook) => returnedBook.member)
  returnedBooks: ReturnedBook[];
}
