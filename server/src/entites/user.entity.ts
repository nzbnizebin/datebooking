
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  public id:number;

  @Column('string', { nullable: true })
  public name:string;

  @CreateDateColumn()
  public created_at:Date;

  @UpdateDateColumn()
  public updated_at:Date;

}
