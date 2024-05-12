import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() book: Book): Promise<Book> {
    return this.booksService.create(book);
  }

  
  // @Get()
  // findAll() {
  //   return this.booksService.findAll();
  // }

  @Get()
  async checkBook(): Promise<Book[]> {
    return this.booksService.checkBook();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() book: Book): Promise<Book> {
    return this.booksService.update(id, book);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.booksService.delete(id);
  }

  
}
