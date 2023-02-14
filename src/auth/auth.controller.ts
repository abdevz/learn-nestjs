import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Get('register')
    register(){
        return 'This the register route!!'
    }
}
