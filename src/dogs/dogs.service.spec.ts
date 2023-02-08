import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DogsService } from './dogs.service';
import { Dog } from './entities/dogs.entity';
import { VetFile } from './entities/VetFile.entity';

describe('DogsService', () => {
  let service: DogsService;
  let dogRepository: Repository<Dog>;
  let vetFileRepository: Repository<VetFile>;

  const id=1;
  const vetFile={ id:1, description:'x'}
  const dog={
    id: 1,
    name: 'pepe',
    vetFile:vetFile, 
    owner:{id: 1, userName: 'JC', password: '1234', dogs:[]},
    ownerId:1,
  };
  const dogs = [dog];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogsService,{
        provide:getRepositoryToken(Dog),
        useValue:{
          find:jest.fn(),
          findOne:jest.fn(),
          save:jest.fn(),
          delete:jest.fn(),
        }
      },
      {
        provide:getRepositoryToken(VetFile),
        useValue:{}
      }],
    }).compile();

    service = module.get<DogsService>(DogsService);
    dogRepository=module.get<Repository<Dog>>(getRepositoryToken(Dog));
    vetFileRepository=module.get<Repository<VetFile>>(getRepositoryToken(VetFile));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(dogRepository).toBeDefined();
    expect(vetFileRepository).toBeDefined();
  });

  describe('getDogs', () => {
    it('should return an array of dogs', async () => {
      jest.spyOn(service, 'getDogs').mockImplementation(async() => dogs);
      expect(await service.getDogs()).toBe(dogs);
      expect(await service.getDogs()).toHaveLength(1);
    })
    it('should call dogsRepository.find', async () => {  
      jest.spyOn(dogRepository, 'find').mockImplementation(async()=>dogs);
      await service.getDogs();
      expect(dogRepository.find).toBeCalledTimes(1);
    })
  });

  describe('getOneDog', () => {
    it('should return a dog', async () => {
      jest.spyOn(service, 'getOneDog').mockImplementation(async() => dog);
      expect(await service.getOneDog(id)).toBe(dog);
    })
    it('should call dogsRepository.findOne', async () => {  
      jest.spyOn(dogRepository, 'findOne').mockImplementation(async()=>dog);
      await service.getOneDog(id);
      expect(dogRepository.findOne).toBeCalledTimes(1);
    })
  });

  describe('createDog', () => {
    it('should create a dog', async () => {
      jest.spyOn(service, 'createDog').mockImplementation(async() => dog);
      expect(await service.createDog(dog)).toBe(dog);
    })
    it('should call dogsRepository.save', async () => {  
      jest.spyOn(dogRepository, 'save').mockImplementation(async()=>dog);
      await service.createDog(dog);
      expect(dogRepository.save).toBeCalledTimes(1);
      expect(dogRepository.save).toHaveBeenCalledWith(dog);
    })
  });

  describe('updateDog', () => {
    it('should update a dog', async () => {
      jest.spyOn(service, 'updateDog').mockImplementation(async() => dog);
      expect(await service.updateDog(id, dog)).toBe(dog);
    })
  });

  describe('deleteDog', () => {
    it('should delete a dog', async () => {
      jest.spyOn(service, 'deleteDog').mockImplementation(async() => undefined);
      expect(await service.deleteDog(id)).toBe(undefined);
    })
  });

  describe('createVetFile', () => {
    it('should create a vetFile', async () => {
      jest.spyOn(service, 'createVetFile').mockImplementation(async() => dog);
      expect(await service.createVetFile(id, vetFile)).toBe(dog);
    })
  });

})






