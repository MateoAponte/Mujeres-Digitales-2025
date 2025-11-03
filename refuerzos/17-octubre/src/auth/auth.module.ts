import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { HasherProvider } from './providers/hasher.provider';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [forwardRef(() => UserModule)],
  providers: [AuthService, HasherProvider],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
