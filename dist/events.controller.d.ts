import { Event } from './event-entity';
import { CreateEventDto } from "./create-event.dto";
import { UpdateEventDto } from "./update-event.dto";
import { Repository } from "typeorm";
export declare class EventsController {
    private readonly repocitory;
    constructor(repocitory: Repository<Event>);
    findAll(): Promise<Event[]>;
    fineOne(id: any): Promise<Event>;
    create(input: CreateEventDto): Promise<{
        when: Date;
        name: string;
        description: string;
        address: string;
    } & Event>;
    update(id: any, input: UpdateEventDto): Promise<{
        when: Date;
        name: string;
        description: string;
        address: string;
        id: number;
    } & Event>;
    remove(id: any): Promise<void>;
}
