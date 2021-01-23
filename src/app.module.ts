import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {typeOrmConfig} from "./config/typeorm.config";
import { AuthModule } from './auth/auth.module';
import { AlertGateway } from './alert/alert.gateway';
import { AlertController } from './alert/alert.controller';
import { MovieModule } from './movie/movie.module';
import { GenreModule } from './genre/genre.module';
import { RatingModule } from './rating/rating.module';
import { LinkModule } from './link/link.module';

@Module({
  imports: [
      TypeOrmModule.forRoot(typeOrmConfig),
      AuthModule,
      MovieModule,
      GenreModule,
      RatingModule,
      LinkModule
  ],
  providers: [AlertGateway],
  controllers: [AlertController],
})
export class AppModule {}
