import { Controller, Get, Body, Post, Param, Query } from '@nestjs/common';
import { TeamService } from './team.service';
import { ITeam } from '../interfaces/team.interface';
import { JoinTeamInbound, ITeamUserOutBound, AddTeamInbound } from 'src/interfaces/team_user.inerface';
import { TeamUserService } from './team_user.service';
import * as _ from 'lodash';
import { ApiOperation } from '@nestjs/swagger';

@Controller('team')
export class TeamController {
  constructor(
    private readonly teamService: TeamService,
    private readonly teamUserService: TeamUserService,
  ) {}

  // @Get('/list')
  // @ApiOperation({ description: '所有队伍', title: '新增用户' })
  // listTeams(): Promise<ITeam[]> {
  //   return this.teamService.findAll();
  // }

  @ApiOperation({ description: '新增队伍', title: '新增队伍' })
  @Post()
  async add_team(@Body() team: AddTeamInbound): Promise<{ team_id: string }> {
      const newTeam = await this.teamService.create(this.team_converter(team));
      this.teamUserService.addTeamUserRelation(team.users[0].user_name, newTeam._id);
      return {
        team_id: this.team_outbound_converter(newTeam).id,
      };
  }

  @ApiOperation({ description: '加入队伍', title: '加入队伍' })
  @Post('/join')
  async joinTeam(@Body() joinTeam: JoinTeamInbound): Promise<ITeam> {
    const { begin_time, user_name, head_img_url} = joinTeam;
    this.teamUserService.addTeamUserRelation(user_name, joinTeam.team_id);
    return this.teamService.join_team(joinTeam.team_id, { begin_time, user_name, head_img_url });
  }

  @ApiOperation({ description: '获取队伍列表', title: '获取队伍列表' })
  @Get('/user')
  async listTeamByUserName(@Query() query: {user_name: string}): Promise<ITeam[]> {
    // tslint:disable-next-line:no-console
    console.log('user_name', query);
    const teamUsers = await this.teamUserService.listTeamsByUserName(query.user_name);
    // tslint:disable-next-line:no-console
    console.log('user_name', query);
    const teamIds = _.map(teamUsers, (i) => i.team_id);
    return this.teamService.listByTeamIds(teamIds);
    return [];
  }

  @ApiOperation({ description: '获取队伍详情', title: '获取队伍详情' })
  @Get('/:id')
  async getTeamById(@Param('id') id: string): Promise<ITeam> {
    return this.teamService.getTeamById(id);
  }

  team_converter(team: AddTeamInbound): ITeam {
    return {
      begin_time: team.users[0].begin_time,
      title: team.title,
      users: [
          team.users[0],
      ],
      total_need: team.total_need,
      created_by: team.users[0].user_name,
    };
  }

  team_outbound_converter(team: ITeam): ITeamUserOutBound {
      return {
        id: team._id,
        title: team.title,
        total_need: team.total_need,
        users: team.users,
        begin_time: team.begin_time,
      };
  }
}
