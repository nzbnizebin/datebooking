export interface ITeam {
    _id?: string;
    title: string;
    begin_time: number;
    total_need: number;
    created_by: string;
    users: DateJoinTeam[];
}

export interface DateJoinTeam {
    user_name: string;
    head_img_url: string;
    begin_time: number;
}
