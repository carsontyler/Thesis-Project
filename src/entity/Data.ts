import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Data {

    @PrimaryGeneratedColumn()
    SessionID: number;

    @Column("integer")
    OverallRating: number;
    @Column("integer")
    RelatedRating: number;
    @Column("integer")
    Accuracy1: number;
    @Column("integer")
    Accuracy2: number;
    @Column("integer")
    Accuracy3: number;
    @Column("integer")
    Accuracy4: number;
    @Column("integer")
    Accuracy5: number;
    @Column("integer")
    Accuracy6: number;
    @Column("integer")
    Accuracy7: number;
    @Column("integer")
    Accuracy8: number;
    @Column("integer")
    Accuracy9: number;
    @Column("integer")
    Accuracy10: number;
    @Column("integer")
    Unexpected1: number;
    @Column("integer")
    Unexpected2: number;
    @Column("integer")
    Unexpected3: number;
    @Column("integer")
    Unexpected4: number;
    @Column("integer")
    Unexpected5: number;
    @Column("integer")
    Unexpected6: number;
    @Column("integer")
    Unexpected7: number;
    @Column("integer")
    Unexpected8: number;
    @Column("integer")
    Unexpected9: number;
    @Column("integer")
    Unexpected10: number;
    @Column("integer")
    ReuseRating: number;
    @Column("integer")
    TrustRating: number;
    @Column("integer")
    SatisfactionRating: number;
    @Column("integer")
    GroupID: number;
    @Column("integer")
    RecipeID: number;

    constructor() {
        this.SessionID=0;
        this.OverallRating=0;
        this.RelatedRating=0;
        this.Accuracy1=0;
        this.Accuracy2=0;
        this.Accuracy3=0;
        this.Accuracy4=0;
        this.Accuracy5=0;
        this.Accuracy6=0;
        this.Accuracy7=0;
        this.Accuracy8=0;
        this.Accuracy9=0;
        this.Accuracy10=0;
        this.Unexpected1=0;
        this.Unexpected2=0;
        this.Unexpected3=0;
        this.Unexpected4=0;
        this.Unexpected5=0;
        this.Unexpected6=0;
        this.Unexpected7=0;
        this.Unexpected8=0;
        this.Unexpected9=0;
        this.Unexpected10=0;
        this.ReuseRating=0;
        this.TrustRating=0;
        this.SatisfactionRating=0;
        this.GroupID=0;
        this.RecipeID=0;
    }
}