import { Inject, Injectable } from '@nestjs/common';
import { REDIS_KEY } from '../constants/RedisKey';
import IORedis from 'ioredis';

@Injectable()
export class RedisHealth {
  constructor(
    /**
     * Inject the Redis client
     */
    @Inject(REDIS_KEY)
    private redis: IORedis,
  ) {}

  async onModuleInit() {
    // Ejecutar un lógica cuando se inicia el módulo
    const pong = await this.redis.ping();
    console.log('💻 Redis OK: ', pong, ' con URL: ', process.env.REDIS_URL);
  }
}
