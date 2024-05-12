import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Member } from 'src/members/entities/member.entity';
import { Book } from 'src/books/entities/book.entity';

@Entity()
export class ReturnedBook {
    @PrimaryGeneratedColumn()
    id: number;
  
   
    @ManyToOne(() => Book, book => book.returnedBooks)
    @JoinColumn({ name: 'book_id' })
    book: Book;
  
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    returnDate: Date;

    @ManyToOne(() => Member, member => member.returnedBooks)
    @JoinColumn({ name: 'member_id' })
    member: Member;
  

}
