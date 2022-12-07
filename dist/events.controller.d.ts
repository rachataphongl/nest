import { Event } from './event-entity';
import { CreateEventDto } from "./create-event.dto";
import { UpdateEventDto } from "./update-event.dto";
export declare class EventsController {
    private events;
    findAll(): Event[];
    fineOne(id: any): void;
    create(input: CreateEventDto): {
        when: Date;
        id: number;
        name: string;
        description: string;
        address: string;
    };
    update(id: any, input: UpdateEventDto): Event;
    remove(id: any): void;
}
