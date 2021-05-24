import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { Team } from './entites/team.entity';
import { TeamUser } from './entites/team_user.entity';
// import { WechatUser } from './entites/wechat_user.entity';
// import { ITeam } from './interfaces/team';
// import { IUser } from './interfaces/user_wechat';

@Injectable()
export class AppService {

  constructor(
    // @InjectRepository(WechatUser)
    // private readonly WechatUserRepository:Repository<WechatUser>,
    // @InjectRepository(Team)
    // private readonly TeamRepository:Repository<Team>,
    @InjectRepository(TeamUser)
    private readonly TeamUserRepository:Repository<TeamUser>,
  ) {}

  public getHello() : string {
    return 'Hello World!';
  }

  // public async addUser(user:IUser) : Promise<void> {
  //   //
  //   const wechat_user = await this.WechatUserRepository.findOne( {open_id: user.openid});

  //   if (!wechat_user) {
  //     const new_wechat_user = new WechatUser();
  //     new_wechat_user.nickname = user.nickname;
  //     new_wechat_user.open_id = user.openid;
  //     new_wechat_user.headimgurl = user.headimgurl;
  //     new_wechat_user.sex = user.sex;
  //     new_wechat_user.created_at = new Date();
  //     new_wechat_user.updated_at = new_wechat_user.created_at;
  //     this.WechatUserRepository.save(wechat_user);
  //   }
  //   return;
  // }

  // public async addTeam(team:ITeam) : Promise<number> {
  //   const new_team = new Team();
  //   new_team.created_by = team.created_by;
  //   new_team.desc = team.desc;
  //   new_team.min_user = team.min_user;
  //   new_team.begin_time = team.begin_time;
  //   const team_saved = await this.TeamRepository.save(new_team);
  //   this.addTeamUser(team_saved.id, team.created_by, team.begin_time);
  //   return 1;
  // }

  // public getCurrentTimestamp() : number {
  //   return Math.floor(Date.now() / 1000);
  // }

  public async addTeamUser(team_id:number, open_id:number, begin_time:number) : Promise<TeamUser> {
    return this.TeamUserRepository.create({ team_id, open_id, begin_time});
  }
}
