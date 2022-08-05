import { Module } from '@nestjs/common';
import { DogModule } from './controllers/dog/dog.module';

@Module({
  imports: [DogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
