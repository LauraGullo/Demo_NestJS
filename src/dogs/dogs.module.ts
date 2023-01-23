import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dog } from 'src/dogs/entities/dogs.entity';
import { OwnerModule } from 'src/owner/owner.module';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { VetFile } from './entities/VetFile.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Dog, VetFile]), OwnerModule],
  controllers: [DogsController],
  providers: [DogsService]
})
export class DogsModule {}
