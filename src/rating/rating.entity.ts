import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../auth/user.entity";
import {MovieEntity} from "../movie/movie.entity";

@Entity()
export class RatingEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column("decimal")
    rating: number

    @Column("timestamp")
    createDate: Date

    @ManyToOne(type => UserEntity, user => user.ratings, { eager: false })
    user: UserEntity

    @ManyToOne(type => MovieEntity, movie => movie.ratings)
    movie: MovieEntity
}