import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Owner } from './Owner.entity';

@Injectable()
export class OwnerService {

    constructor(@InjectRepository(Owner)private ownerRepository: Repository<Owner>){

    }

    async createOwner(owner:Owner){
         const ownerFound=await this.ownerRepository.findOne({where:{userName:owner.userName}})
         if(ownerFound){
             return new HttpException("Owner already exists", HttpStatus.CONFLICT)
         }
         return this.ownerRepository.save(owner);
     }

     getOwners(){
        return this.ownerRepository.find();
  }
}
