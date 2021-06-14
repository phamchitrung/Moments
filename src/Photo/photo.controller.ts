import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common'
import { PhotoDto } from 'src/models';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController{
    constructor(private photoService: PhotoService){}

    @Post(':galleryId')
    add(@Param('galleryId') galleryId: number, @Body() photoCreateDto: PhotoDto): void{
        console.log('Creating');
        this.photoService.create(galleryId, photoCreateDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number): void{
        console.log('Deleting');
        this.photoService.remove(id);
    }
}