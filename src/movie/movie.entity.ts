import {BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique} from "typeorm";
import {OneToMany} from "typeorm/index";
import {GenreEntity} from "../genre/genre.entity";
import {RatingEntity} from "../rating/rating.entity";
enum Genre {
    Documentary,
    Drama,
    Comedy,
    Romance,
    Action,
    Thriller,
    Mystery,
    Horror,
    SciFi,
    Children,
    Adventure,
    Fantasy,
    IMAX,
    Animation,

}
@Entity()
export class MovieEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column("timestamp")
    createDate: Date

    @OneToMany(type => GenreEntity, genre => genre.movie, { eager: true })
    genres: GenreEntity[]

    @OneToMany(type => RatingEntity, rating => rating.movie, {eager: true})
    ratings: RatingEntity[]
}