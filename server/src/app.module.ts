import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBModule } from './db/db.module';
// import { Team } from './entites/team.entity';
import { TeamUser } from './entites/team_user.entity';
// import { WechatUser } from './entites/wechat_user.entity';

@Module({
  // imports: [TypeOrmModule.forFeature([WechatUser, Team, TeamUser])],
  imports: [TypeOrmModule.forFeature([TeamUser]), DBModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
