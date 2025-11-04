import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(
    /**
     * Inject Auth Service
     */
    private readonly authService: AuthService
  ) {}
  
  @UseGuards(AuthGuard('jwt-refresh'))
  @Post('refresh')
  refresh(@Req() req: any) {
    const authHeader = req.headers.authorization;
    const refreshToken = authHeader?.split(' ')[1];
    return this.authService.refresh(refreshToken);
  }
}
