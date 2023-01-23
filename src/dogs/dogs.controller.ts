import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Dog } from 'src/entities/dogs.entity/dogs.entity';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  
  constructor(private dogsService : DogsService){}

  @Get(':id')
  getOneDog(@Param ('id')id:number){
    return this.dogsService.getOneDog(id);
  }
 
  @Get()
  getDogs() {
    return this.dogsService.getDogs();
  }

  @Post()
  createDog(@Body() dog){
    return this.dogsService.createDog(dog);
  }
  
  @Delete(':id')
    deleteDog(@Param('id', ParseIntPipe) id: number) {
        return this.dogsService.deleteDog(id);
    }

  @Put(':id')
    updateDog(@Param('id', ParseIntPipe) id: number, @Body() dog: Dog): Dog {
        return this.dogsService.updateDog(id, dog);
    }  
    

}
