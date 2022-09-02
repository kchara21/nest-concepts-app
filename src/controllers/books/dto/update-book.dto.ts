import { IntersectionType, PartialType } from '@nestjs/mapped-types';
import { CreateBookDto, AdditionalBookInfoDto } from './create-book.dto';

export class UpdateBookDto extends IntersectionType(
  CreateBookDto,
  AdditionalBookInfoDto,
) {}
