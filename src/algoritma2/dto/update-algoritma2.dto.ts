import { PartialType } from '@nestjs/swagger';
import { CreateAlgoritma2Dto } from './create-algoritma2.dto';

export class UpdateAlgoritma2Dto extends PartialType(CreateAlgoritma2Dto) {}
