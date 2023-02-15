import { IsString, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity{
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    firstName:string;
    @Column()
    lastName:string;
    @Column({unique:true})
    email:string;
    
    @Column()
    password?:string;
}