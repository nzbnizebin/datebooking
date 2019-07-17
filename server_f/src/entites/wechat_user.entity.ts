
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class WechatUser {
  @PrimaryGeneratedColumn()
  public id:number;

  @Column('number', { nullable: false })
  public user_id:number;

  @Column('string', { nullable: true })
  public nickname:string;

  @Column('string', { nullable: true})
  public headimgurl:string;

  @Column('number', { nullable:true })
  public sex:number;

  @CreateDateColumn()
  public created_at:Date;

  @UpdateDateColumn()
  public updated_at:Date;

}
