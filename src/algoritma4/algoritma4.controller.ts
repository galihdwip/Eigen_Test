import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Algoritma4Service } from './algoritma4.service';
import { CreateAlgoritma4Dto } from './dto/create-algoritma4.dto';
import { UpdateAlgoritma4Dto } from './dto/update-algoritma4.dto';

@Controller('algoritma4')
export class Algoritma4Controller {
  constructor(private readonly algoritma4Service: Algoritma4Service) {}

  @Post('diagonal-difference')
  calculateDiagonalDifference(@Body('matrix') matrix: number[][]): number {
    return this.algoritma4Service.calculateDiagonalDifference(matrix);
  }
}
