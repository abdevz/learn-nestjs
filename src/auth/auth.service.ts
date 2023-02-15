import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './models/user.entity';
import { Repository } from 'typeorm';
import { User } from './models/user.interface';



@Injectable()
export class AuthService {
    constructor( @InjectRepository(UserEntity) private readonly userRepository : Repository<UserEntity> ){}
    async create(user:User): Promise<User>{
        return await this.userRepository.save(user)
    }

    async findOneByEmail(email:string){
        
        const user= await this.userRepository.findOne( { where : {email : email} });
        console.log('service',email)
        return user 
        

    }
        
        
}
