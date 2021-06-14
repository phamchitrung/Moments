import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gallery } from 'src/Entity/gallery.entity';
import { Photo } from 'src/Entity/photo.entity';
import { PhotoModule } from 'src/Photo/photo.module';
import { GalleryController } from './gallery.controller';
import { GalleryService } from './gallery.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gallery, Photo])],
  providers: [GalleryService],
  controllers: [GalleryController],
  exports: [TypeOrmModule]
})
export class GalleryModule {}