import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EMAIL_WORKER_KEY } from './redis/constants/EmailKeys';

async function bootstrapWorker() {
  const app = await NestFactory.createApplicationContext(AppModule);
  console.log('👷‍♂️ Worker iniciado');

  const worker = app.get(EMAIL_WORKER_KEY);

  worker.on('completed', (job, res) => {
    console.log('✅ Completed', job.id, res);
  });
  worker.on('failed', (job, err) => {
    console.log('❌ Failed', job.id, err);
  });

  void worker.run();
  console.log('👷‍♂️ Worker escuchando trabajos...');

  const shutdown = async () => {
    try {
      await worker.close();
    } catch {}
    await app.close();
    process.exit(0);
  };
  process.on('SIGNTERM', shutdown);
  process.on('SIGINT', shutdown);
}
bootstrapWorker();
