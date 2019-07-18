import { ApiModelProperty } from '@nestjs/swagger';

export class User {
    @ApiModelProperty({
        nullable: true,
        description: '昵称',
    })
    public nickname:string;
    @ApiModelProperty({
        nullable: true,
        description: 'headimgurl',
    })
    public headimgurl:string;
    @ApiModelProperty({
        nullable: false,
        description: 'openid',
    })
    public openid:string;
    @ApiModelProperty({
        nullable: true,
        description: 'sex',
    })
    public sex:number;
}
