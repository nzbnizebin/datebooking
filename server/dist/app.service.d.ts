import { HttpService } from '@nestjs/common';
export declare class AppService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getHello(): string;
}
