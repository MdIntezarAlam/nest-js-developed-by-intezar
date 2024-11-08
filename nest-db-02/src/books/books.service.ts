import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Books, BooksDocument } from './schema/books.schema';
import { title } from 'process';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Books.name) private booksModel: Model<BooksDocument>) { }
  create(createBookDto: CreateBookDto): Promise<Books> {
    const model = new this.booksModel()
    model.title = createBookDto.title
    model.author = createBookDto.author
    model.Published = createBookDto.Published
    return model.save()
  }

  findAll(): Promise<Books[]> {
    return this.booksModel.find().exec()
  }

  findOne(id: string): Promise<Books> {
    return this.booksModel.findById(id).exec()
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    return this.booksModel.updateOne({ _id: id }, {
      title: updateBookDto.title,
      author: updateBookDto.author,
      Published: updateBookDto.Published
    }).exec()

  }

  remove(id: string) {
    return this.booksModel.deleteOne({ _id: id }).exec()
  }
  removeAll() {
    return this.booksModel.deleteMany({}).exec()
  }

  
}
