
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('team_user')
export class TeamUser {
  @PrimaryGeneratedColumn()
  public id:number;

  @Column('string', { nullable: true })
  public name:string;

  @Column('number')
  public team_id:number;

  @Column('number')
  public begin_time:number;

  @Column('number')
  public open_id:number;

  @CreateDateColumn()
  public created_at:Date;

  @UpdateDateColumn()
  public updated_at:Date;

}
