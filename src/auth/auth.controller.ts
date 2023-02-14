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
    
}
