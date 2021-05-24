import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ITeam } from '../interfaces/team.interface';
import { DateJoinTeam } from 'src/interfaces/team_user.inerface';
// tslint:disable-next-line:no-var-requires
const mongoose = require('mongoose');
import * as _ from 'lodash';

@Injectable()
export class TeamService {
  constructor(
      @InjectModel('Team') private readonly teamModel: Model<ITeam>,
    ) {}

  async create(team: ITeam): Promise<ITeam> {
    const createdTeam = new this.teamModel(team);
    return createdTeam.save();
  }

  async findAll(): Promise<ITeam[]> {
    return this.teamModel.find().exec();
  }

  async getTeamById(id: string): Promise<ITeam> {
    return this.teamModel.findOne({ _id: mongoose.Types.ObjectId(id)});
  }

  async join_team(id: string, myData: DateJoinTeam): Promise<ITeam> {
    // tslint:disable-next-line:no-console
    console.log('id: ', id);
    this.teamModel.updateOne({_id: mongoose.Types.ObjectId(id)}, {$push: { users: myData }}).exec();
    return this.getTeamById(mongoose.Types.ObjectId(id));
  }

  async listByTeamIds(ids: string[]): Promise<ITeam[]> {
    const ObjectIds = _.map(ids, (i: string) => mongoose.Types.ObjectId(i));
    if (_.isEmpty(ObjectIds)) { return; }
    return this.teamModel.find({_id: {$in: ObjectIds}});
  }
}
