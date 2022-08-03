import { Test, TestingModule } from '@nestjs/testing';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';

describe('DogController', () => {
  let dogController: DogController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DogController],
      providers: [DogService],
    }).compile();

    dogController = app.get<DogController>(DogController);
  });

  describe('root', () => {
    it('should return "Hello {id}!"', () => {
      expect(dogController.getDog(1)).toBe('Hello 1!');
    });
  });
});
