import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { Gallery } from "./gallery.entity";

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    url: string;

    @Column()
    galleryId: number;

    @ManyToOne(type => Gallery, gallery => gallery.photos)
    gallery: Gallery;

}