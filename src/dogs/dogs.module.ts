import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dog } from 'src/dogs/entities/dogs.entity';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { VetFile } from './entities/VetFile.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Dog, VetFile])],
  controllers: [DogsController],
  providers: [DogsService]
})
export class DogsModule {}
