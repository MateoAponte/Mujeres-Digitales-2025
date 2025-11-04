import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AesStrategy } from "../aes-strategy";
import { SECRET_REFRESH_TOKEN } from "src/auth/constants/SecretRT";
import { AES_KEY } from "src/auth/constants/AESKey";
import { SECRET_ACCESS_TOKEN } from "src/auth/constants/SecretAT";

@Injectable()
export class JwtProvider {
  constructor(
    /**
     * Inject JWT Service
     */
    private readonly jwtService: JwtService,

    /**
     * Inject AES Strategy
     */
    private readonly aesStrategy: AesStrategy
  ) {}

  signTokens(userId: string, email: string, pass: string) {
    const payload = { sub: userId, email, password: pass };

    const access_token = this.jwtService.sign(payload, {
      secret: this.aesStrategy.decrypt(SECRET_ACCESS_TOKEN, AES_KEY),
      expiresIn: '15m',
    });
    const refresh_token = this.jwtService.sign(payload, {
      secret: this.aesStrategy.decrypt(SECRET_REFRESH_TOKEN, AES_KEY),
      expiresIn: '7d',
    });
    return { access_token, refresh_token };
  }

  refreshTokens(refresh_token: string) {
    return this.jwtService.verify(refresh_token, {
      secret: this.aesStrategy.decrypt(SECRET_REFRESH_TOKEN, AES_KEY),
    });
  }
}