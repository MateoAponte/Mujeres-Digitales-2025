import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AT_SECRET } from '../constants/ATSecret';

@Injectable() // Yo le dire que hacer con al Access Token
export class JwtAtStrategy extends PassportStrategy(Strategy, 'token') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: AT_SECRET,
    });
  }

  validate(payload: any) {
    return { id: payload.id, email: payload.email };
  }
}
