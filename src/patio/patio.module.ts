import { Module } from '@nestjs/common';
import { PatioService } from './patio.service';
import { PatioController } from './patio.controller';

@Module({
  providers: [PatioService],
  controllers: [PatioController]
})
export class PatioModule {}
