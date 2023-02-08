import { Dog } from "./../dogs/entities/dogs.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, } from "typeorm";

@Entity()
export class Owner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique:true})
  userName: string;

  @Column()
  password: string;

  @OneToMany(()=>Dog, dog =>dog.owner)
  dogs:Dog[];
 
}
