import { Injectable } from '@nestjs/common';
import { CreateAlgoritma3Dto } from './dto/create-algoritma3.dto';
import { UpdateAlgoritma3Dto } from './dto/update-algoritma3.dto';

@Injectable()
export class Algoritma3Service {
  countWords(input: string[], query: string[]): number[] {
    return query.map(
      (word) => input.filter((inputWord) => inputWord === word).length,
    );
  }
}
