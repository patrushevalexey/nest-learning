import { Inject, Injectable } from '@nestjs/common';
import { ModelClass } from 'objection';
import { PersonModel } from '../models/person.model';
import { PersonInterface } from '../../interfaces/person.interface';
import { CreatePersonDto } from '../../dto/person.dto';

@Injectable()
export class PersonRepo {
  constructor(
    @Inject('PersonModel')
    private readonly personModel: ModelClass<PersonModel>,
  ) {}

  async create(dto: CreatePersonDto): Promise<PersonInterface> {
    return this.personModel.query().insert({
      ...dto,
    });
  }

  async getAll(): Promise<PersonInterface[]> {
    return this.personModel.query().select().withGraphJoined('flats');
  }

  async delete(id: string): Promise<void> {
    this.personModel.query().delete().where('id', id);
  }
}
