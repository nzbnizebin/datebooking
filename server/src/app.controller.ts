import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiImplicitBody, ApiImplicitParam, ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { User } from './document/user';
import { IUser } from './interfaces/user_wechat';
@ApiUseTags('User')

@Controller()
export class AppController {
  constructor(private readonly appService:AppService) {}

  @Get()
  public getHello() : string {
    return this.appService.getHello();
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiOperation({ description: '新增用户', title: '新增用户' })
  @ApiImplicitBody({ name: 'company', required: true, type: User })
  public addUser(@Body() user:IUser) : void {
    // this.appService.create()
  }
}
