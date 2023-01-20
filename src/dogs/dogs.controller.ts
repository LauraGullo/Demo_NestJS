import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Delete } from '@nestjs/common/decorators';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  
  constructor(private dogsService : DogsService){}

  @Get('/:id')
  getOneDogs(@Param ('id')id:number) {
    return this.dogsService.getOneDog(id);
  }

  @Get('all')
  getDogs() {
    return this.dogsService.getDogs();
  }

  @Post()
  createDog(@Body() dog){
    return this.dogsService.createDog(dog);
  }

  @Delete()
  deletedDog(@Param ("id")id:number){
    return 
  }
}
