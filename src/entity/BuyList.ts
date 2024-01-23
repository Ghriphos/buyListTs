import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User"

@Entity()
export class BuyList {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => User)
    @JoinColumn({ name: "userId", referencedColumnName: "id" })
    userId: number
}