import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TeamUserRelation } from '../interfaces/team_user.inerface';
import { ITeam } from 'src/interfaces/team.interface';
// tslint:disable-next-line:no-var-requires
const mongoose = require('mongoose');

@Injectable()
export class TeamUserService {
  constructor(
    @InjectModel('TeamUser') private readonly teamUserModel: Model<TeamUserRelation>,
    @InjectModel('Team') private readonly teamModel: Model<ITeam>,
    ) {}

    async addTeamUserRelation(userName: string, teamId: string): Promise<void> {
      const createdTeam = new this.teamUserModel({ user_name: userName, team_id: teamId});
      return createdTeam.save();
    }

    async listTeamsByUserName(userName: string): Promise<TeamUserRelation[]> {
      return this.teamUserModel.find({user_name: userName});
    }
}
