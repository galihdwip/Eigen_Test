import { PartialType } from '@nestjs/swagger';
import { CreateAlgoritma4Dto } from './create-algoritma4.dto';

export class UpdateAlgoritma4Dto extends PartialType(CreateAlgoritma4Dto) {}
