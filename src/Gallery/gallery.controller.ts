import { Controller, Get, Post, Param, Body, Delete, Res, Put } from '@nestjs/common'
import { GalleryDto, PhotoDto } from 'src/models';
import { Response } from 'express';
import { GalleryService } from './gallery.service';

@Controller('gallery')
export class GalleryController{
    constructor(private galleryService: GalleryService){}
    @Get()
    async get(@Res() res: Response): Promise<void> {
        var result = await this.galleryService.findAll();
        res.json(result)
    }

    @Get('getGalleryIncludePhoto/:id')
    async getGalleryIncludePhoto(@Param('id') id: number, @Res() res: Response): Promise<void> {
        var result = await this.galleryService.findOne(id);
        res.json(result)
    }

    @Post()
    async create(@Body() galleryCreateDto: GalleryDto): Promise<void>{
        console.log('creating');
        this.galleryService.create(galleryCreateDto);
    }

    @Put()
    async update(@Body() galleryUpdateDto: GalleryDto): Promise<void>{
        console.log('Updating');
        this.galleryService.update(galleryUpdateDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void>{
        console.log('Deleting');
        this.galleryService.remove(id);
    }
}