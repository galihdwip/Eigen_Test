import { PartialType } from '@nestjs/swagger';
import { CreateReturnedBookDto } from './create-returned-book.dto';

export class UpdateReturnedBookDto extends PartialType(CreateReturnedBookDto) {}
