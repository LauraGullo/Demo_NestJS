import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { OwnerController } from './owner.controller';
import { Owner } from './Owner.entity';
import { OwnerService } from './owner.service';

describe('OwnerController', () => {
  let controller: OwnerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OwnerController,],
      providers: [OwnerService,{
        provide:getRepositoryToken(Owner),
        useValue:{}
      }],
    }).compile();

    controller = module.get<OwnerController>(OwnerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
