import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from "@nestjs/jwt";
import { jwtConstant } from './auth.constant';
import { JwtStrategy } from './jwt.strategy';

@Module({
    controllers: [AuthController],
    imports: [
        UserModule, 
        PassportModule,
        JwtModule.register({
          secret: jwtConstant.secret,
          signOptions: { expiresIn: '3600s' }
        })
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
