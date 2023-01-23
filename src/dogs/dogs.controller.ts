import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Dog } from 'src/entities/dogs.entity/dogs.entity';
import { DogsService } from './dogs.service';

@Controller(':dogs')
export class DogsController {
  
  constructor(private dogsService : DogsService){}

  @Get(':id')
  getOneDog(@Param ('id', ParseIntPipe)id:number):Dog {
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

}
