import { Module } from '@nestjs/common';
import { Algoritma4Service } from './algoritma4.service';
import { Algoritma4Controller } from './algoritma4.controller';

@Module({
  controllers: [Algoritma4Controller],
  providers: [Algoritma4Service],
})
export class Algoritma4Module {}
