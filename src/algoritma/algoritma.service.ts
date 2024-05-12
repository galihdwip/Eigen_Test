import { Injectable } from '@nestjs/common';
import { CreateAlgoritmaDto } from './dto/create-algoritma.dto';
import { UpdateAlgoritmaDto } from './dto/update-algoritma.dto';

@Injectable()
export class AlgoritmaService {
  reverseAlphabet(input: string): string {
    const letters = input.match(/[a-zA-Z]/g);
    const numbers = input.match(/\d+/);
    const reversedLetters = letters ? letters.reverse().join('') : '';
    const result = reversedLetters + (numbers ? numbers[0] : '');
    return result;
  }
}
