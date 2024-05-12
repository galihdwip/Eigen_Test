import { Module } from '@nestjs/common';
import { Algoritma3Service } from './algoritma3.service';
import { Algoritma3Controller } from './algoritma3.controller';

@Module({
  controllers: [Algoritma3Controller],
  providers: [Algoritma3Service],
})
export class Algoritma3Module {}
