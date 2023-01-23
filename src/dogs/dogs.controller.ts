import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
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

}
