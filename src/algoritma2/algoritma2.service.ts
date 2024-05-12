import { Injectable } from '@nestjs/common';
import { CreateAlgoritma2Dto } from './dto/create-algoritma2.dto';
import { UpdateAlgoritma2Dto } from './dto/update-algoritma2.dto';

@Injectable()
export class Algoritma2Service {
  findLongestWord(sentence: string): {
    longestWord: string;
    totalCharacters: number;
  } {
    const words = sentence.split(' ');
    let longestWord = '';
    let totalCharacters = 0;

    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
        totalCharacters = word.length;
      }
    }

    return { longestWord, totalCharacters };
  }
}
