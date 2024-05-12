import { PartialType } from '@nestjs/swagger';
import { CreateBorrowedBookDto } from './create-borrowed-book.dto';

export class UpdateBorrowedBookDto extends PartialType(CreateBorrowedBookDto) {}
