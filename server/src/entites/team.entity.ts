
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  public id:number;

  @Column('string', { nullable: true })
  public desc:string;

  @Column('number', { nullable: true })
  public begin_time:number;

  @Column('number', { nullable: true, default: 0 })
  public min_user:number;

  @Column('number', { nullable:true })
  public created_by:number;

  public is_cancel:number;

  @CreateDateColumn()
  public created_at:Date;

  @UpdateDateColumn()
  public updated_at:Date;

}
