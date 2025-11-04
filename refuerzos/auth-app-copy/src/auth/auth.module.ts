import { Module } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { SaltStrategy } from './providers/salt-strategy';
import { JwtATStrategy } from './providers/jwt/jwt-access-strategy';
import { JwtRTStrategy } from './providers/jwt/jwt-refresh-strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AesStrategy } from './providers/aes-strategy';
import { AuthController } from './auth.controller';
import { JwtProvider } from './providers/jwt/jwt-provider';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({})
  ],
  providers: [AuthService, JwtProvider, SaltStrategy, JwtATStrategy, JwtRTStrategy, AesStrategy],
  exports: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
