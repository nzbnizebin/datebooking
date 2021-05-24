import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamModule } from './team/team.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongoroot:mongopwd@127.0.0.1:21087/nest'),
    TeamModule,
  ],
})
export class AppModule {}
