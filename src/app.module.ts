import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GalleryController } from './Gallery/gallery.controller'
import { PhotoController } from './Photo/photo.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { GalleryModule } from './Gallery/gallery.module';
import { GalleryService } from './Gallery/gallery.service';
import { PhotoService } from './Photo/photo.service';
import { PhotoModule } from './Photo/photo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'qweqwe',
      database: 'Gallery',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    GalleryModule,
    PhotoModule
  ],
  controllers: [AppController, GalleryController, PhotoController],
  providers: [AppService, GalleryService, PhotoService],
})

export class AppModule {}
