import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { InfoUserEntity } from 'src/info-user/info-user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,InfoUserEntity])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
