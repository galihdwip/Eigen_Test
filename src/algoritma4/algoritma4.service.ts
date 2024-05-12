import { Injectable } from '@nestjs/common';
import { CreateAlgoritma4Dto } from './dto/create-algoritma4.dto';
import { UpdateAlgoritma4Dto } from './dto/update-algoritma4.dto';

@Injectable()
export class Algoritma4Service {
  calculateDiagonalDifference(matrix: number[][]): number {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
      primaryDiagonalSum += matrix[i][i];
      secondaryDiagonalSum += matrix[i][matrix.length - i - 1];
    }

    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
  }
}
