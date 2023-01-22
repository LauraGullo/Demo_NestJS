import { join } from "path";
import { Dog } from "src/dogs/entities/dogs.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, } from "typeorm";

@Entity()
export class Owner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique:true})
  userName: string;

  @Column()
  password: string;

}
