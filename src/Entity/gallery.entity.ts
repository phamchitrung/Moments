import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Photo } from "./photo.entity";

@Entity()
export class Gallery {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    createdby: string;

    @OneToMany(type => Photo, photo => photo.gallery)
    photos: Photo[];

}