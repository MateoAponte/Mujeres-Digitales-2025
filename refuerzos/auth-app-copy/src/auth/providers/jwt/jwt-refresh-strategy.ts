import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { SECRET_REFRESH_TOKEN } from 'src/auth/constants/SecretRT';
import { AesStrategy } from '../aes-strategy';
import { AES_KEY } from 'src/auth/constants/AESKey';

@Injectable()
export class JwtRTStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(
    /**
     * Inject Auth Service
     */
    private readonly aesStrategy: AesStrategy
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: aesStrategy.decrypt(SECRET_REFRESH_TOKEN, AES_KEY),
    })
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
