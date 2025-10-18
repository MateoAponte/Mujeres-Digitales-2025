import { Inject, Injectable } from '@nestjs/common';
import { HasherProvider } from './providers/hasher.provider';
import { LoginDto } from './dto/login.dto';
import { UserRepository } from 'src/user/providers/user.repository';

@Injectable()
export class AuthService {
  constructor(
    /**
     * Inject the Hasher Provider
     */
    private readonly hasherProvider: HasherProvider,

    /**
     * Inject the user service
     */
    @Inject()
    private readonly userRepository: UserRepository,
  ) {}

  async checkPassword(password: string, hash: string) {
    return await this.hasherProvider.checkPassword(password, hash);
  }

  async hashPassword(password: string) {
    return await this.hasherProvider.hashPassword(password);
  }

  async login(loginDto: LoginDto) {
    const user = await this.userRepository.findByEmail(loginDto.email);
    if (!!user === false) return 'El usuario no existe';

    const isSamePass = await this.checkPassword(
      loginDto.password,
      user.password,
    );
    if (!isSamePass) return 'La contraseña no es correcta';

    return {
      status: 200,
      message: 'Login correcto',
    };
  }
}
