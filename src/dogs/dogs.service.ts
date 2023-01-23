import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dog } from 'src/dogs/entities/dogs.entity';
import { Repository } from 'typeorm';
import { UpdateDogDto } from './dto/UpdateDog.dto';
import { VetFile } from './entities/VetFile.entity';


@Injectable()
export class DogsService {

    constructor(@InjectRepository(Dog)private dogRepository: Repository<Dog>, 
                @InjectRepository(VetFile) private vetFileReposiory:Repository<VetFile>){}

   
    getDogs(){
          return this.dogRepository.find({relations:['owner','vetFile']});
    }
    
    async getOneDog(id:number){
        const dogFound= await this.dogRepository.findOne({where:{id}});
        if(!dogFound){
            return new HttpException("Dog not found", HttpStatus.NOT_FOUND)
        }
        return dogFound;
    }

    async createDog(dog){
        return this.dogRepository.save(dog);
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

    async createVetFile(id:number, vetFile:VetFile){
        const dogFound=await this.dogRepository.findOne({where:{id}})
        if(!dogFound){
            return new HttpException("Dog not found", HttpStatus.NOT_FOUND)
        }
        const savedVetFile=await this.vetFileReposiory.save(vetFile);
        dogFound.vetFile=savedVetFile;
        return this.dogRepository.save(dogFound);
    }
}
