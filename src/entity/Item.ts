import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, PrimaryColumn } from "typeorm"
import { BuyList } from "./BuyList"

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number
    
    @ManyToOne(type => BuyList)
    @JoinColumn({ name: "buyListId", referencedColumnName: "id"})
    buyListId: number

    @Column()
    description: string
    
}