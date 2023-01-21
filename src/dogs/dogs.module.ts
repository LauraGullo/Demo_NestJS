import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dog } from 'src/entities/dogs.entity/dogs.entity';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';

@Module({
  imports:[TypeOrmModule.forFeature([Dog])],
  controllers: [DogsController],
  providers: [DogsService]
})
export class DogsModule {}
