import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Compensation {
    @PrimaryGeneratedColumn()
    SessionID: number;

    @Column("text")
    Name: string;

    @Column("text")
    Email: string;

    constructor() {
        this.SessionID = 0;
        this.Name = "";
        this.Email = "";
    }
}