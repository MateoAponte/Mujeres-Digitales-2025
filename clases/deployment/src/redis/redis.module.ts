import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import databaseConfig from 'src/config/database.config';
import { REDIS_KEY } from './constants/RedisKey';
import { RedisHealth } from './providers/redis-health';
import IORedis from 'ioredis';
import {
  EMAIL_KEY,
  EMAIL_QUEUE_KEY,
  EMAIL_SCHEDULER_KEY,
  EMAIL_WORKER_KEY,
} from './constants/EmailKeys';
import { Queue, JobScheduler, Worker } from 'bullmq';

@Module({
  imports: [ConfigModule.forFeature(databaseConfig)],
  providers: [
    {
      provide: REDIS_KEY,
      inject: [databaseConfig.KEY],
      useFactory: (db: ConfigType<typeof databaseConfig>) => {
        const redisUrl = db.redis ?? 'redis://localhost:6379';

        const isSecure = redisUrl.includes('rediss://');

        return new IORedis(redisUrl, {
          maxRetriesPerRequest: null,
          tls: isSecure ? {} : undefined,
        });
      },
    },
    {
      provide: EMAIL_KEY,
      useFactory: (conn: IORedis) =>
        new Queue(EMAIL_QUEUE_KEY, {
          connection: conn,
          defaultJobOptions: {
            attempts: 3,
            backoff: {
              type: 'exponential',
              delay: 1000,
            },
            removeOnComplete: {
              age: 3600,
              count: 100,
            },
            removeOnFail: {
              age: 3600,
            },
          },
        }),
      inject: [REDIS_KEY],
    },
    {
      provide: EMAIL_SCHEDULER_KEY,
      useFactory: (conn: IORedis) =>
        new JobScheduler(EMAIL_QUEUE_KEY, {
          connection: conn,
        }),
      inject: [REDIS_KEY],
    },
    {
      provide: EMAIL_WORKER_KEY,
      useFactory: (conn: IORedis) =>
        new Worker(
          EMAIL_QUEUE_KEY,
          async (job) => {
            console.log('Job Recibido: ', job.name, job.data);

            if (job.name === 'welcome') {
              // Utilizar su sender provider para enviar el email
              await new Promise((r) => setTimeout(r, 7000));
              console.log('✅ Email simulado enviado a: ', job.data.to);

              return {
                sentTo: job.data.to,
              };
            }
          },
          {
            connection: conn,
            concurrency: 5,
            autorun: false,
          },
        ),
      inject: [REDIS_KEY],
    },
    RedisHealth,
  ],
  exports: [REDIS_KEY, EMAIL_KEY],
})
export class RedisModule {}
