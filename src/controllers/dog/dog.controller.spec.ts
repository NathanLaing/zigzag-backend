import { Test, TestingModule } from '@nestjs/testing';
import { DogController } from './dog.controller';
import { DogService } from '../../services/dog.service';

describe('DogController', () => {
  let dogController: DogController;
  let mockDogService: Partial<DogService>;

  beforeEach(async () => {
    mockDogService = {
      getAllDogs: jest.fn(),
      getDog: jest.fn(),
    };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [DogController],
      providers: [{ provide: DogService, useValue: mockDogService }],
    }).compile();

    dogController = app.get<DogController>(DogController);
  });

  describe('dog/:id', () => {
    it('should call DogService.getDog() with the provided id', () => {
      const getDogSpy = jest.spyOn(mockDogService, 'getDog');
      dogController.getDog({ id: 1 });
      expect(getDogSpy).toHaveBeenCalledWith(1);
    });
  });

  describe('dogs', () => {
    it('should call DogService.getAllDogs()', () => {
      const getAllDogsSpy = jest.spyOn(mockDogService, 'getAllDogs');
      dogController.getAllDogs();
      expect(getAllDogsSpy).toHaveBeenCalled();
    });
  });
});
