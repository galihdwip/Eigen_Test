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
import { AlgoritmaService } from './algoritma.service';

@Controller('algoritma')
export class AlgoritmaController {
  constructor(private readonly algoritmaService: AlgoritmaService) {}

  @Get()
  reverseAlphabet(@Query('input') input: string): string {
    return this.algoritmaService.reverseAlphabet(input);
  }
}
