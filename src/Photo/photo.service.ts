import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from 'src/Entity/photo.entity';
import { PhotoDto } from 'src/models';
import { Repository } from 'typeorm';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepo: Repository<Photo>,
  ) {}

  async remove(id: number): Promise<void> {
    await this.photoRepo.delete(id);
  }

  async create(galleryId: number, photo: PhotoDto){
    var entity = new Photo();
    entity.name = photo.title;
    entity.url = photo.url;
    entity.galleryId = galleryId;

    await this.photoRepo.save(entity);
  }
}