import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HasherProvider {
  async checkPassword(password: string, hash: string) {
    console.log('Auth hasher: ', password, hash);
    return await bcrypt.compare(password, hash);
  }

  async hashPassword(pass: string) {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(pass, salt);
  }
}
