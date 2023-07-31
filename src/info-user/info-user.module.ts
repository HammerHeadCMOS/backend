import { Module } from '@nestjs/common';
import { InfoUserController } from './info-user.controller';
import { InfoUserService } from './info-user.service';

@Module({
  controllers: [InfoUserController],
  providers: [InfoUserService]
})
export class InfoUserModule {}
