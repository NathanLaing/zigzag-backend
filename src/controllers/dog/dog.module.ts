import { Module } from '@nestjs/common';
import { DogController } from './dog.controller';
import { DogService } from '../../services/dog.service';

@Module({
  imports: [],
  controllers: [DogController],
  providers: [DogService],
})
export class DogModule {}
