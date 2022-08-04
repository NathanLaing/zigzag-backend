import { Injectable } from '@nestjs/common';
import { Dog } from './dog.entity';

@Injectable()
export class DogService {
  private dogs: Dog[] = [
    {
      id: 1,
      name: 'Poodle',
    },
    {
      id: 2,
      name: 'Cocker Spaniel',
    },
    {
      id: 3,
      name: 'Dashund',
    },
  ];

  getDog(id: number): Dog {
    return this.dogs[id];
  }

  getAllDogs(): Dog[] {
    return this.dogs;
  }
}
