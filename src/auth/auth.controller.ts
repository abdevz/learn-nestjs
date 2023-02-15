import { BadRequestException, Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt'
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { Response,Request } from 'express';
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private jwtService:JwtService
        ){}
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
        @Res( {passthrough : true} ) response : Response,     
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

        const jwt = await this.jwtService.signAsync({id :user.id})
        response.cookie('jwt',jwt, {httpOnly:true})
        return  {user}      
    }   
    
    @Get('user')
    async user(@Req() request:Request){
        const cookie=request.cookies['jwt'];
        return{
            cookie
        }

    }
}
