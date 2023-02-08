
import { Owner } from '../../owner/Owner.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { VetFile } from './VetFile.entity';

@Entity()
export class Dog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(()=>VetFile)
  @JoinColumn()
  vetFile:VetFile; 

  @ManyToOne(()=>Owner, owner=>owner.dogs)
  owner:Owner;

  @Column({nullable:true})
  ownerId:number;
}
