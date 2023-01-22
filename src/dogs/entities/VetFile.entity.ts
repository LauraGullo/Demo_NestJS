import { Dog } from "src/dogs/entities/dogs.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class VetFile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

}