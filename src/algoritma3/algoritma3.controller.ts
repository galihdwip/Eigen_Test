import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Algoritma3Service } from './algoritma3.service';
import { CreateAlgoritma3Dto } from './dto/create-algoritma3.dto';
import { UpdateAlgoritma3Dto } from './dto/update-algoritma3.dto';

@Controller('algoritma3')
export class Algoritma3Controller {
  constructor(private readonly algoritma3Service: Algoritma3Service) {}

  @Post()
  countWords(@Body() data: { input: string[]; query: string[] }): number[] {
    const { input, query } = data;
    return this.algoritma3Service.countWords(input, query);
  }
}
