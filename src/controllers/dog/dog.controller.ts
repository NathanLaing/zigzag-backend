import { Controller, Get, Param } from '@nestjs/common';
import { DogService } from '../../services/dog.service';
import { Dog } from '../../shared/dog.interface';

@Controller()
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get('/dog/:id')
  getDog(@Param() params): Dog {
    return this.dogService.getDog(params.id);
  }

  @Get('/dogs')
  getAllDogs(): Dog[] {
    return this.dogService.getAllDogs();
  }
}
