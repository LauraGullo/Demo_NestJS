import { Injectable } from '@nestjs/common';
import { Dog } from 'src/entities/dogs.entity/dogs.entity';


@Injectable()
export class DogsService {

    private dogs: Dog[]=[];

    getDogs():Dog[]{
        
        return this.dogs;
    }
    
    getOneDog(id:number){
        return this.dogs.find(dog=> dog.id==id);
    }
       
    createDog(dog){
        const dogCreated=this.dogs.push(dog)
        return dogCreated;
    }
     
 
}
