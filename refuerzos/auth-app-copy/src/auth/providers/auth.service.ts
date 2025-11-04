import { Injectable } from '@nestjs/common';
import { SaltStrategy } from './salt-strategy';
import { User } from 'src/user/user.entity';
import { JwtProvider } from './jwt/jwt-provider';

@Injectable()
export class AuthService {
  constructor(
    /**
     * Inject Salt Strategy
     */
    private readonly saltStrategy: SaltStrategy,

    /**
     * Inject JWT Service
     */
    private readonly jwtProvider: JwtProvider,
  ) {}

  async checkPassword(password: string, hash: string) {
    return await this.saltStrategy.checkPassword(password, hash);
  }
  async hashPassword(password: string) {
    return await this.saltStrategy.hashPassword(password);
  }

  async login(password: string, user: User) {
    const isValidated = await this.checkPassword(password, user.pass);
    if(isValidated) {
      return this.jwtProvider.signTokens(user.userId, user.name, user.pass ?? []);
    } else {
      return 'Invalid Password'
    }
  }

  async refresh(refreshToken: string) {
    const payload = await this.jwtProvider.refreshTokens(refreshToken);
    return this.jwtProvider.signTokens(payload.sub, payload.email, '');
  }
}
