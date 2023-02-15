import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt'
import { RegisterDto } from './dto/register.dto';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    @Post('register')
    async register(@Body() body:RegisterDto){
        const slatOrRounds=14;
        const hashed= await bcrypt.hash(body.password,slatOrRounds)
        
        if(body.password !==body.passwordConfirm) {
           
            
            console.log(body.password," ", hashed)
             throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Password no matching' })
        }
        
        return this.authService.create({   
                             
                firstName:body.firstName,
                lastName:body.lastName,
                email:body.email,
                password:hashed 
            }
            
        )
    }

    @Post('login')
    async login(
        @Body('email') email:string, 
        @Body('password') password:string,       
    ){
        const user= await this.authService.findOneByEmail(email);
        console.log('authController',user)
        if(!user){
            console.log(user)
            throw new BadRequestException('Something bad happened with email', { cause: new Error(), description: 'Email does not exist'})
        }

        if(!await bcrypt.compare(password,user.password)){
            throw new BadRequestException('Something bad happened with password', { cause: new Error(), description: 'Invalid credentials'})
        }
        return  user;        
    }    
}
