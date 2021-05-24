import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamSchema } from '../schema/team.schema';
import { TeamUserSchema } from '../schema/team_user.schema';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';

import mongoose = require('mongoose');
import { TeamUserService } from './team_user.service';
mongoose.set('debug', true);
@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Team', schema: TeamSchema },
    { name: 'TeamUser', schema: TeamUserSchema }]),
  ],
  controllers: [TeamController],
  providers: [TeamService, TeamUserService],
})

export class TeamModule {
}
