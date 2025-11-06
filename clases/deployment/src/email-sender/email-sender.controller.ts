import { Body, Controller, Post } from '@nestjs/common';
import { EmailSenderDto } from './dto/emailSender';
import { Producer } from './providers/producer';

@Controller('email-sender')
export class EmailSenderController {
  constructor(
    /**
     * Inject Producer Provider
     */
    private readonly producer: Producer,
  ) {}

  @Post('welcome')
  async enqueue(@Body() body: EmailSenderDto) {
    return this.producer.sendWelcomeEmail(body);
  }

  @Post('welcome-later')
  async later(@Body() body: EmailSenderDto) {
    return this.producer.sendWelcomeLater(body);
  }

  @Post('welcome-daily')
  async daily(@Body() body: EmailSenderDto) {
    return this.producer.scheduleDaily(body);
  }
}
