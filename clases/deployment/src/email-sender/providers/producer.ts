import { Inject, Injectable } from '@nestjs/common';
import { JobsOptions, Queue } from 'bullmq';
import { EMAIL_KEY } from 'src/redis/constants/EmailKeys';
import { EmailSenderDto } from '../dto/emailSender';
import { WELCOME_EMAIL_JOB } from '../constants/EmailJobs';

@Injectable()
export class Producer {
  constructor(
    /**
     * Inject Email Sender Worker
     */
    @Inject(EMAIL_KEY)
    private readonly queue: Queue,
  ) {}

  async sendWelcomeEmail(data: EmailSenderDto) {
    const opts: JobsOptions = {
      delay: 0,
      priority: 2,
    };
    return this.queue.add(WELCOME_EMAIL_JOB, data, opts);
  }
  async sendWelcomeLater(data: EmailSenderDto) {
    const opts: JobsOptions = {
      delay: 15000,
    };
    return this.queue.add(WELCOME_EMAIL_JOB, data, opts);
  }

  async scheduleDaily(data: EmailSenderDto) {
    return this.queue.add(WELCOME_EMAIL_JOB, data, {
      repeat: {
        pattern: '* * * * *', // Cron Pattern, Indicar franjas de tiempo por medio de simbolos
        // Cada min ejecuta esta tarea
        // 0 * * * *
        // 0 9 * * *
        // */15 * * * *
      },
    });
  }
}
