import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post} from "@nestjs/common";
import { Event } from './event-entity';
import { CreateEventDto } from "./create-event.dto";
import { UpdateEventDto } from "./update-event.dto";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Controller('/events')
export class EventsController{
    constructor (
        @InjectRepository(Event)
        private readonly repocitory: Repository<Event>
    ) {}

    @Get()
    async findAll() {
        return await this.repocitory.find() 
    }
    @Get(':id')
    async fineOne(@Param() id: any) {
       return  await this.repocitory.findOne(id);

       
    }
    @Post()
    create(@Body() input: CreateEventDto) {
        return this.repocitory.save({
            ...input,
            when: new Date(input.when)
        });
        
    }
    @Patch(':id')
    async update(@Param() id:any, @Body() input: UpdateEventDto) {
        const event = await this.repocitory.findOne({where: id})
        
         return await this.repocitory.save( {
            ...event,
            ...input,
            when: input.when ? new Date(input.when) : event.when
        })

    
    }
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param() id:any) {
        const event = await this.repocitory.findOne({where: id})
        await this.repocitory.remove(event)

    }
}

