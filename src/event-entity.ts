import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('events') // plural name
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100}) // defined length
    name: string;

    @Column()
    description: string;

    @Column({name: 'when_date'}) //change name
    when: Date;

    @Column()
    address: string;
}

