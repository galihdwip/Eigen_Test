import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { Member } from 'src/members/entities/member.entity';
import { Book } from 'src/books/entities/book.entity';

@Entity()
export class BorrowedBook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  borrowDate: Date;

  @Column({ default: 0 })
  isReturned: boolean;

  @ManyToOne(() => Member, (member) => member.borrowedBooks)
  @JoinColumn({ name: 'member_id' })
  member: Member;

  @ManyToOne(() => Book, (book) => book.borrowedBooks)
  @JoinColumn({ name: 'book_id' }) // Hubungkan ke kolom book_id
  book: Book;
}
