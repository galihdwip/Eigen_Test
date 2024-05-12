import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { Algoritma2Service } from './algoritma2.service';
import { CreateAlgoritma2Dto } from './dto/create-algoritma2.dto';
import { UpdateAlgoritma2Dto } from './dto/update-algoritma2.dto';

@Controller('algoritma2')
export class Algoritma2Controller {
  constructor(private readonly algoritma2Service: Algoritma2Service) {}

  @Get()
  findLongestWord(@Query('sentence') sentence: string): {
    longestWord: string;
    totalCharacters: number;
  } {
    return this.algoritma2Service.findLongestWord(sentence);
  }
}
