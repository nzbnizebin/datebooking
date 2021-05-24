import { ITeam } from './team.interface';

export interface ITeamUserOutBound extends AddTeamInbound {
    users: DateJoinTeam[];
}

export interface TeamUser {
    begin_time: number;
    user_name: number;
    head_img_url: string;
    wechat_user: WechatUser|void;
}

export interface WechatUser {
    user_name: string;
    head_img_url: string;
    openid: number;
    sex: number;
}

export interface JoinTeamInbound {
    team_id: string;
    user_name: string;
    head_img_url: string;
    begin_time: number;
}

export interface AddTeamInbound {
    id?: string;
    title: string;
    total_need: number;
    begin_time?: number;
    users: DateJoinTeam[];
}

export interface DateJoinTeam {
    user_name: string;
    head_img_url: string;
    begin_time: number;
}

export interface TeamUserRelation {
    team_id: string;
    user_name: string;
    open_id: string;
}
