import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post} from "@nestjs/common";
import { Event } from './event-entity';
import { CreateEventDto } from "./create-event.dto";
import { UpdateEventDto } from "./update-event.dto";

@Controller('/events')
export class EventsController{
    private events: Event[] = [];
    @Get()
    findAll() {
        return this.events 
    }
    @Get(':id')
    fineOne(@Param() id) {
        const event = this.events.find(
            event => event.id === parseInt(id)
        );
    }
    @Post()
    create(@Body() input: CreateEventDto) {
        const event = {
            ...input,
            when: new Date(input.when),
            id: this.events.length + 1
        };
        this.events.push(event)
        return event
    }
    @Patch(':id')
    update(@Param() id, @Body() input: UpdateEventDto) {
        const index = this.events.findIndex(event => event.id === parseInt(id));

        this.events[index] = {
            ...this.events[index],
            ...input,
            when: input.when ? new Date(input.when) : this.events[index].when
        }

        return this.events[index]
    }
    @Delete(':id')
    @HttpCode(204)
    remove(@Param() id) {
        this.events.filter(event => event.id !== parseInt(id))

    }
}