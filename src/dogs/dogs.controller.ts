import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Delete } from '@nestjs/common/decorators';
import { Put } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { DogsService } from './../dogs/dogs.service';
import { UpdateDogDto } from './dto/UpdateDog.dto';
import { VetFile } from './entities/VetFile.entity';

@Controller('dogs')
export class DogsController {
  
  constructor(private dogsService : DogsService){}

  @Get(':id')
  getOneDog(@Param ('id')id:number) {
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
  deleteDog(@Param ('id', ParseIntPipe)id:number){
    return this.dogsService.deleteDog(id);
  }
 
  @Put(':id')
  updateDog(@Param ('id', ParseIntPipe)id:number, @Body()dog:UpdateDogDto){
    return this.dogsService.updateDog(id,dog);
  }

  @Post('vetFile/:id')
  createVetFile(@Body() vetFile:VetFile, @Param('id', ParseIntPipe)id:number){
    return this.dogsService.createVetFile(id, vetFile);
  }
}
