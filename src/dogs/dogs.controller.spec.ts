import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { Dog } from './entities/dogs.entity';
import { VetFile } from './entities/VetFile.entity';

describe('DogsController', () => {
  let controller: DogsController;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DogsController],
      providers: [DogsService, {
        provide:getRepositoryToken(Dog),
        useValue:{}},
        {
          provide:getRepositoryToken(VetFile),
          useValue:{}
        }],
    }).compile();

    controller = module.get<DogsController>(DogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

 

});
