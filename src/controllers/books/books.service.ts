import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  create(createBookDto: CreateBookDto) {
    return createBookDto;
  }

  findAll(params): any {
    let msg = 'findAll funcionando. Parametros: ';
    if (params.order !== undefined) {
      msg = msg + `order:${params.order}`;
    }

    if (params.limit !== undefined) {
      msg = msg + `limit:${params.limit}`;
    }
    return msg;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
