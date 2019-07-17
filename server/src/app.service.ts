import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor(private readonly httpService:HttpService) {}

  public getHello() : string {
    return 'df' ;
  }
}
