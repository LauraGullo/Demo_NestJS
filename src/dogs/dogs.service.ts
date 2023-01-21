import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dog } from 'src/entities/dogs.entity/dogs.entity';
import { Repository } from 'typeorm';


@Injectable()
export class DogsService {

    constructor(@InjectRepository(Dog)private dogRepository: Repository<Dog> ){}

   
    getDogs(){
          return this.dogRepository.find();
    }
    
    getOneDog(id:number){
        return this.dogRepository.findOne({where:{id}});
    }

    createDog(dog){
        const dogCreated=this.dogRepository.create(dog);
        return this.dogRepository.save(dogCreated);
    }

    updateDog(id:number, updateDogDto){
        this.dogRepository.update(id, updateDogDto);
        return updateDogDto;
    }

    deleteDog(id:number){
        this.dogRepository.delete(id)
        return "Id: " + id +" removed";
    }
}
