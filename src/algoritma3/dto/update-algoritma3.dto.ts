import { PartialType } from '@nestjs/swagger';
import { CreateAlgoritma3Dto } from './create-algoritma3.dto';

export class UpdateAlgoritma3Dto extends PartialType(CreateAlgoritma3Dto) {}
