import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  async hashPassword(pass: string) {
    const salt = await bcrypt.genSalt(); // Cadena aleatoria de caracterés
    return await bcrypt.hash(pass, salt);
  }

  async compareHash(pass: string, hashPass: string) {
    return await bcrypt.compare(pass, hashPass);
  }

  async checkAuthenticatedUser(password: string, dbPassword: string) {
    // ... Lógica relacionada al proceso de autenticación
    return await this.compareHash(password, dbPassword);
  }
}
