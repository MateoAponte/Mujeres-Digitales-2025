import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { RT_SECRET } from '../constants/RTSecret';

@Injectable()
export class JwtRtstrategy extends PassportStrategy(Strategy, 'refresh-token') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: RT_SECRET,
    });
  }

  validate(payload: any) {
    return { id: payload.id, email: payload.email };
  }
}
