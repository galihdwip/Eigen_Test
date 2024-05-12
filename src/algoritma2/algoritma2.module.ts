import { Module } from '@nestjs/common';
import { Algoritma2Service } from './algoritma2.service';
import { Algoritma2Controller } from './algoritma2.controller';

@Module({
  imports: [],
  controllers: [Algoritma2Controller],
  providers: [Algoritma2Service],
})
export class Algoritma2Module {}
