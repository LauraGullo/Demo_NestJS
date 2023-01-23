import { Injectable } from '@nestjs/common';
import { Dog } from 'src/entities/dogs.entity/dogs.entity';

@Injectable()
export class DogsService {

    private dogs: Dog[]=[];

    getDogs():Dog[]{
        
        return this.dogs;
    }
    
    getOneDog(id:number):Dog{
        const dog= this.dogs.find((dog)=> dog.id==id);
        return dog;

    }
       
    createDog(dog){
        const dogCreated=this.dogs.push(dog)
        return dogCreated;
    }

}
