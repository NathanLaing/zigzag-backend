import { Test, TestingModule } from '@nestjs/testing';
import { DogService } from './dog.service';

describe('DogService', () => {
  let service: DogService;

  const mockDogData = [
    {
      id: 33,
      name: 'Mock Dog Name',
      description: 'mock description',
      imageUrl: 'mock image url',
    },
    {
      id: 34,
      name: 'Mock Dog Name 2',
      description: 'mock description 2',
      imageUrl: 'mock image url 2',
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogService],
    }).compile();

    service = module.get<DogService>(DogService);
    service.dogs = mockDogData;
  });

  describe('getDog', () => {
    it('should return a Dog object with an id that matches the provided value', () => {
      const dog = service.getDog(33);
      expect(dog.id).toEqual(33);
    });
  });

  describe('getAllDogs', () => {
    it('should return an array of Dogs', () => {
      const dogs = service.getAllDogs();
      expect(dogs).toEqual(mockDogData);
    });
  });
});
