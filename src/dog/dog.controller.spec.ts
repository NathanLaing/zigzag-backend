import { Test, TestingModule } from '@nestjs/testing';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';

describe('DogController', () => {
  let dogController: DogController;

  beforeEach(async () => {
    const mockDogService = {
      getAllDogs: jest.fn(() => {
        return [
          { id: 1, name: 'mock dog 1' },
          { id: 2, name: 'mock dog 2' },
        ];
      }),
      getDog: jest.fn((id: number) => {
        return { id: id, name: 'mock dog' };
      }),
    } as Partial<DogService>;

    const app: TestingModule = await Test.createTestingModule({
      controllers: [DogController],
      providers: [{ provide: DogService, useValue: mockDogService }],
    }).compile();

    dogController = app.get<DogController>(DogController);
  });

  describe('dog/:id', () => {
    it('should return a dog with the provided id', () => {
      const expected = { id: 3, name: 'mock dog' };
      expect(dogController.getDog(3)).toBe(expected);
    });
  });

  describe('dogs', () => {
    it('should return an object containing all the dogs', () => {
      const expected = [
        { id: 1, name: 'mock dog 1' },
        { id: 2, name: 'mock dog 2' },
      ];
      expect(dogController.getAllDogs()).toBe(expected);
    });
  });
});
