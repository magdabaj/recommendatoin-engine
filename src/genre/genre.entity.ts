import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique} from "typeorm";
import {MovieEntity} from "../movie/movie.entity";

@Entity()
export class GenreEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @ManyToOne(type => MovieEntity, movie => movie.genres, { eager: false })
    movie: MovieEntity
}