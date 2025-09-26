import { Module } from '@nestjs/common';
import { CheffController } from './cheff.controller';

@Module({
  controllers: [CheffController]
})
export class CheffModule {}
