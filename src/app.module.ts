import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { InfoUserModule } from './info-user/info-user.module';
import { RolModule } from './rol/rol.module';
import { AutoModule } from './auto/auto.module';
import { InfoUserEntity } from './info-user/info-user.entity';
import { AutoEntity } from './auto/auto.entity';
import { RolEntity } from './rol/rol.entity';
import { PatioModule } from './patio/patio.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'pacdb',
      entities: [
        User,
        InfoUserEntity,
        AutoEntity,
        RolEntity
      ],
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: false,
    }),
    UsersModule,
    InfoUserModule,
    RolModule,
    AutoModule,
    PatioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
