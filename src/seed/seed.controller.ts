import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces';


@Controller('seed')
export class SeedController {
  constructor(
    private readonly seedService: SeedService
  ) {}


  @Get()
  // @Auth(ValidRoles.admin)
  executeAll() {
    return this.seedService.runSeed();
  }

 

}
