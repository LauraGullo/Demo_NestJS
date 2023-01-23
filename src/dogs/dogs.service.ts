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
    
    deleteDog(id: number) {
        this.dogs = this.dogs.filter(dog => dog.id !== id);
    }
    
    updateDog(id: number, dog) {
        const dogFound= this.dogs.find((dog)=> dog.id==id);
        const updateDog=Object.assign(dogFound,dog);
        return updateDog;
    }

}
