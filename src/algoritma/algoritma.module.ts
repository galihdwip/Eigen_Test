import { Module } from '@nestjs/common';
import { AlgoritmaService } from './algoritma.service';
import { AlgoritmaController } from './algoritma.controller';

@Module({
  imports: [],
  controllers: [AlgoritmaController],
  providers: [AlgoritmaService],
})
export class AlgoritmaModule {}
