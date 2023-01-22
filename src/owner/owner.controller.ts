import { Body, Controller, Get, Post } from '@nestjs/common';
import { OwnerService } from './owner.service';

@Controller(':owner')
export class OwnerController {

    constructor(private ownerService : OwnerService){}

    @Get()
    getowners() {
      return this.ownerService.getOwners();
    }
  
    @Post()
    createowner(@Body() owner){
      return this.ownerService.createOwner(owner);
    }
  
}
