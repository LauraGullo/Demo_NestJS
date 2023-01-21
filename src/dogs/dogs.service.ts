import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dog } from 'src/entities/dogs.entity/dogs.entity';
import { Repository } from 'typeorm';
import { UpdateDogDto } from './dto/UpdateDog.dto';


@Injectable()
export class DogsService {

    constructor(@InjectRepository(Dog)private dogRepository: Repository<Dog> ){}

   
    getDogs(){
          return this.dogRepository.find();
    }
    
    async getOneDog(id:number){
        const dogFound= await this.dogRepository.findOne({where:{id}});
        if(!dogFound){
            return new HttpException("Dog not found", HttpStatus.NOT_FOUND)
        }
        return dogFound;
    }

    async createDog(dog){
        const dogFound=await this.dogRepository.findOne({where:{name:dog.name}})
        if(dogFound){
            return new HttpException("Dog already exists", HttpStatus.CONFLICT)
        }
        const dogCreated=this.dogRepository.create(dog);
        return this.dogRepository.save(dogCreated);
    }

    async updateDog(id:number, dog: UpdateDogDto){
        const dogFound= await this.dogRepository.findOne({where:{id}});
        if(!dogFound){
            return new HttpException("Dog not found", HttpStatus.NOT_FOUND)
        }
        const updateDog=Object.assign(dogFound, dog); 
        return this.dogRepository.save(updateDog);
    }

    async deleteDog(id:number){
        const result=await this.dogRepository.delete(id);
        if(result.affected===0){
            return new HttpException('Dog not found', HttpStatus.NOT_FOUND);
        }
        return "Id " + id +" removed";
    }
}
