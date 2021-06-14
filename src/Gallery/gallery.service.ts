import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Gallery } from 'src/Entity/gallery.entity';
import { Photo } from 'src/Entity/photo.entity';
import { GalleryDto } from 'src/models';
import { Repository } from 'typeorm';

@Injectable()
export class GalleryService {
  constructor(
    @InjectRepository(Gallery)
    private galleryRepo: Repository<Gallery>,
    @InjectRepository(Photo)
    private photoRepo: Repository<Photo>,
  ) {}

  findAll(): Promise<Gallery[]> {
    return this.galleryRepo.find();
  }

  findOne(id: number): Promise<Gallery> {
    return this.galleryRepo.findOne(id, {relations: ["photos"]});
  }

  async remove(id: number): Promise<void> {
    await this.galleryRepo.delete(id);
  }

  async create(gallery: GalleryDto){
    var entity = new Gallery();
    entity.name = gallery.title;
    entity.createdby = gallery.createdby;

    await this.galleryRepo.save(entity);
  }

  async update(gallery: GalleryDto){
    var entity = await this.galleryRepo.findOne(gallery.id);
    entity.name = gallery.title;

    await this.galleryRepo.save(entity);
  }
}