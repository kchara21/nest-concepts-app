import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>,
  ) {}

  async findAll(params): Promise<Book[]> {
    return await this.booksRepository.find();
  }

  async findOne(id: string): Promise<Book> {
    return await this.booksRepository.findOne({ where: { id: +id } });
  }

  create(createBookDto: CreateBookDto): Promise<Book> {
    return this.booksRepository.save(createBookDto);
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<any> {
    const toUpdate = await this.booksRepository.findOne({ where: { id: +id } });
    const updated = Object.assign(toUpdate, updateBookDto);
    return this.booksRepository.save(updated);
  }

  async remove(id: string): Promise<any> {
    return await this.booksRepository.delete({ id: +id });
  }
}
