import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { SECRET_ACCESS_TOKEN } from 'src/auth/constants/SecretAT';

@Injectable()
export class JwtATStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    /**
     * Inject JWT Service
     */
    private readonly jwtService: JwtService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: SECRET_ACCESS_TOKEN,
    })
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
