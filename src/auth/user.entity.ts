import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique} from "typeorm/index";
import * as bcrypt from 'bcrypt'
import {RatingEntity} from "../rating/rating.entity";

@Entity()
@Unique(['username'])
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    email: string

    @Column()
    password: string

    @Column("timestamp")
    createDate: Date

    @Column()
    salt: string

    @OneToMany(type => RatingEntity, rating => rating.user, {eager: true})
    ratings: RatingEntity[]

    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt)
        return hash === this.password
    }
}